module.exports = function (wallaby) {
	return {
		trace: true,
		tests: ["tests/**/*-test.ts", "tests/**/*-test.tsx"],
		testFramework: "vitest",
		// compilers: {
		// 	"**/*.ts": wallaby.compilers.typeScript({
		// 		typescript: require("typescript"),
		// 		module: 1, // commonjs
		// 		emitDecoratorMetadata: true,
		// 	}),
		// },
	};
};
