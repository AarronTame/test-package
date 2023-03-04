import { defineConfig } from "tsup";

export default defineConfig({
	clean: true,
	sourcemap: false,
	tsconfig: "./tsconfig.json",
	format: ["esm", "cjs"],
	entry: ["./src"],
	splitting: false,
	dts: true,
	target: "es6",
	external: ["react"],
	minifyWhitespace: true,
	bundle: false,
	skipNodeModulesBundle: true,
	platform: "browser",
	shims: false,
});
