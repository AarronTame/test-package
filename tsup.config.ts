import { defineConfig } from "tsup";

export default defineConfig({
	splitting: true,
	clean: true,
	dts: true,
	format: ["esm", "cjs"],
	minify: true,
	bundle: true,
	skipNodeModulesBundle: true,
	entryPoints: ["src/index.ts"],
	target: "es6",
	outDir: "dist",
	sourcemap: false,
	entry: ["src/**/*.ts", "src/**/*.tsx"],
	minifyWhitespace: true,
});
