import { render, getByTestId } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as Icons from "../src";
import { renderPathForWeight } from "../src/lib";

const isIcon = (candidate: any): candidate is Icons.Icon => {
	return candidate && "displayName" in candidate && candidate["displayName"] !== Icons.IconBase.displayName;
};

const isDefinition = (candidate: any): candidate is Icons.RenderFunction => {
	return typeof candidate === "function" && candidate.name.includes("Definition");
};

const iconsMap = Object.entries(Icons).reduce((acc, [name, candidate]) => {
	if (!isIcon(candidate)) return acc;

	return [
		...acc,
		{
			name,
			Icon: candidate,
		},
	];
}, [] as Array<{ name: string; Icon: Icons.Icon }>);

const iconDefinitionMap = Object.entries(Icons).reduce((acc, [name, candidate]) => {
	if (!isDefinition(candidate)) return acc;

	return [
		...acc,
		{
			name,
			definition: candidate,
		},
	];
}, [] as Array<{ name: string; definition: Icons.RenderFunction }>);

describe("icons", () => {
	it("renderPathForWeight should throw with invalid weight", () => {
		// @ts-expect-error
		expect(() => renderPathForWeight("unknown", "red", new Map())).toThrowError(
			/^Unsupported icon weight: {unknown}. Choose from/
		);
	});

	describe.each(iconsMap)("Icon: $name", ({ name, Icon }) => {
		const testId = `test-${name}`;

		it("is truthy", () => {
			expect(Icon).toBeTruthy();
		});

		it("is properly named", () => {
			expect(name).toEqual(Icon.displayName);
		});

		it("renders content", () => {
			const result = render(<Icon data-testid={testId} />);
			expect(getByTestId(result.container, testId)).toBeTruthy();
		});

		it.each(["thin", "light", "regular", "bold", "fill", "duotone"] as Array<Icons.IconWeight>)(
			"with weight: ['%s'] renders",
			(weight) => {
				const result = render(<Icon weight={weight} data-testid={testId} />);
				const element = getByTestId(result.container, testId);
				expect(element).toBeTruthy();
				expect(element.getAttribute("data-weight")).toBe(weight);
			}
		);
	});

	describe.each(iconDefinitionMap)("Icon definition: $name", ({ name, definition }) => {
		it("is truthy", () => {
			expect(definition).toBeTruthy();
			expect(definition).toBeDefined();
		});

		it("is properly named", () => {
			expect(definition.name.includes("Definition")).toBe(true);
		});

		it("should throw an error if no args passed when calling the definition", () => {
			// @ts-expect-error
			expect(() => definition()).toThrowError(/^Unsupported icon weight: {undefined}. Choose from/);
		});
	});
});
