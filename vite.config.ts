import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react({ jsxRuntime: "classic" })],
	test: {
		globals: true,
		environment: "jsdom",
		coverage: {
			provider: "istanbul", // or 'c8'
			reporter: "lcov",
		},
	},
});
