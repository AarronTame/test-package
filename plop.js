import path from "node:path";
import nodePlop from "node-plop";

const plop = await nodePlop(path.join(process.cwd(), "plopfile.js"));

export async function createIconFile(name, weightMaps) {
	const iconGenerator = plop.getGenerator("icon");
	iconGenerator.runActions({ name, weightMaps }).then(function (results) {
		// console.log(results);
	});
}

export async function createExportFile(data) {
	const exportGenerator = plop.getGenerator("export");
	exportGenerator.runActions({ data }).then(function (results) {
		// console.log(results);
	});
}
