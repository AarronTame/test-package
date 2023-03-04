import { describe, expect, it } from "vitest";
import { add } from "../src";

describe("main functions", () => {
	it("should add two numbers", () => {
		expect(add(1, 1)).toBe(2);
	});

	it("should concatenate the values if a string is passed in", () => {
		// @ts-expect-error
		expect(add("1", 2)).toBe("12");
	});
});
