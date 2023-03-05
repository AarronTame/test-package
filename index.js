import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import humanizeDuration from "humanize-duration";
import { createExportFile, createIconFile } from "./plop.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const COMPONENTS_PATH = path.join(__dirname, "./src/icons");
export const ASSETS_PATH = path.join(__dirname, "./assets");

const humanizer = humanizeDuration.humanizer({
	units: ["m", "s", "ms"],
	language: "shortEn",
	languages: {
		shortEn: {
			m: () => "m",
			s: () => "s",
			ms: () => "ms",
		},
	},
});

function performanceFactory() {
	const start = performance.now();
	return () => humanizer(performance.now() - start, { maxDecimalPoints: 2 });
}

function recreateFolder(pathname) {
	if (fs.existsSync(pathname)) {
		fs.rmSync(pathname, { recursive: true });
	}
	fs.mkdirSync(pathname);
}

function fileIsSVG(file) {
	return file.includes(".svg");
}

// Check to make sure the directory is not empty and contains at least one SVG file
function nonEmptyDirectory(pathName) {
	const files = fs.readdirSync(path.join(ASSETS_PATH, pathName));
	return !(files.length === 0 && !files.some(fileIsSVG));
}

function ensurePathIsDirectory(pathName) {
	return fs.lstatSync(path.join(ASSETS_PATH, pathName)).isDirectory();
}

function getAssetParts(pathname) {
	const file = fs.readFileSync(pathname);
	const parts = file
		.toString("utf-8")
		.replace(/^.*<\?xml.*?\>/g, "")
		.replace(/<svg.*?>/g, "")
		.replace(/<\/svg>/g, "")
		.replace(/<rect width="25[\d,\.]+" height="25[\d,\.]+" fill="none".*?\/>/g, "")
		.replace(/<title.*?/, "")
		.replace(/"#0+"/g, "{color}")
		.replace(/fill\-rule/g, "fillRule")
		.replace(/stroke-linecap/g, "strokeLinecap")
		.replace(/stroke-linejoin/g, "strokeLinejoin")
		.replace(/stroke-width/g, "strokeWidth")
		.replace(/stroke-miterlimit/g, "strokeMiterlimit");

	return parts;
}

function getAssetsMap() {
	const folders = fs
		.readdirSync(ASSETS_PATH, "utf-8")
		.filter(ensurePathIsDirectory)
		.filter(nonEmptyDirectory)
		.reduce((acc, folder) => {
			const files = fs
				.readdirSync(path.join(ASSETS_PATH, folder))
				.filter(fileIsSVG)
				.reduce((fileAcc, filename) => {
					const filepath = path.join(ASSETS_PATH, folder, filename);
					const weight = filename.split(".svg")[0]?.split("-").slice(-1)[0];

					switch (weight) {
						case "thin":
						case "light":
						case "bold":
						case "fill":
						case "duotone":
							return {
								...fileAcc,
								[weight]: getAssetParts(filepath),
							};
						default:
							return {
								...fileAcc,
								["regular"]: getAssetParts(filepath),
							};
					}
				}, {});

			return {
				...acc,
				[folder]: files,
			};
		}, {});

	return folders;
}

function main() {
	recreateFolder(COMPONENTS_PATH);

	const assetMap = getAssetsMap();

	for (let [key, weights] of Object.entries(assetMap)) {
		const iconAssetData = Object.entries(weights).map(([weightKey, weightContent]) => {
			return { key: weightKey, content: weightContent.toString() };
		});
		createIconFile(key, iconAssetData);
	}

	createExportFile(Object.keys(assetMap));
}

const runTime = performanceFactory();
console.log("running main");
main();
console.log(`finished: elapsed ${runTime()}`);
