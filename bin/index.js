import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ora from "ora";
import chalk from "chalk";
import humanizeDuration from "humanize-duration";
import nodePlop from "node-plop";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const COMPONENTS_PATH = path.join(__dirname, "../src/icons");
export const ASSETS_PATH = path.join(__dirname, "../assets");

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

const plop = await nodePlop(path.join(process.cwd(), "./bin/plopfile.js"), {
	destBasePath: process.cwd(),
});

const runPlopAction = (actionName, data) => plop.getGenerator(actionName).runActions(data);

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
		.replace(/<rect width="25[\d,\.]+" height="25[\d,\.]+" fill="none".*?\/>/g, "");

	return parts;
}

function getAssetsMap() {
	const weightFolderNames = fs
		.readdirSync(ASSETS_PATH, "utf-8")
		.filter(ensurePathIsDirectory)
		.filter(nonEmptyDirectory)
		.flatMap((foldername) => {
			const files = fs.readdirSync(path.join(ASSETS_PATH, foldername)).filter(fileIsSVG);

			return files.map((filename) => ({
				weight: foldername,
				iconname: filename.replace(/\.svg/, "").replace(new RegExp(`-${foldername}`), ""),
				content: getAssetParts(path.join(ASSETS_PATH, foldername, filename)),
			}));
		})
		.reduce((acc, file) => {
			return {
				...acc,
				[file.iconname]: {
					...acc[file.iconname],
					[file.weight]: file.content,
				},
			};
		}, {});

	return weightFolderNames;
}

async function main() {
	recreateFolder(COMPONENTS_PATH);

	const assets = ora({
		text: `Building asset map`,
		color: "yellow",
	}).start();
	const assetMapTimer = performanceFactory();
	const assetMap = getAssetsMap();
	assets.succeed(`Asset map created: ${chalk.gray(assetMapTimer())}`);

	const totalAssets = Object.keys(assetMap).length;
	let generateFileCount = 0;

	const generation = ora({
		text: `Generating components ${generateFileCount}/${totalAssets}`,
		color: "yellow",
	}).start();

	const componentGenerationTimer = performanceFactory();

	for (let [name, weights] of Object.entries(assetMap)) {
		const weightMaps = Object.entries(weights).map(([weightKey, weightContent]) => {
			return { key: weightKey, content: weightContent };
		});

		await runPlopAction("icon", { name, weightMaps });

		generation.start(`Generating components ${generateFileCount++}/${totalAssets}`);
	}

	generation.succeed(
		`Generated ${generateFileCount}/${totalAssets} components: ${chalk.gray(componentGenerationTimer())}`
	);

	const additional = ora({
		text: "Generating additional files",
		color: "yellow",
	}).start();

	const additionalGenerationTimer = performanceFactory();

	const icons = Object.keys(assetMap);

	await runPlopAction("export", { icons });
	await runPlopAction("icon-types", { icons });

	additional.succeed(`Generated additional files: ${chalk.gray(additionalGenerationTimer())}`);
}

const runTime = performanceFactory();

ora({
	text: `Starting file geneartion`,
	color: "yellow",
}).info();

await main();

ora({
	text: `Total elapsed time: ${chalk.gray(runTime())}`,
	color: "yellow",
}).info();
