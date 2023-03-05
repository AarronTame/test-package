import React from "react";
import { render, getByTestId } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as Icons from "../src";

const isIcon = (candidate: any): candidate is Icons.Icon => {
	return candidate && "displayName" in candidate && candidate["displayName"] !== Icons.IconBase.displayName;
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

describe.concurrent("icons", () => {
	describe.concurrent("IconBase", () => {
		const testWeights = new Map<Icons.IconWeight, React.ReactElement>([["regular", <rect />]]);
		it.concurrent("has the correct transform if 'mirrored' prop is passed", () => {
			const result = render(<Icons.IconBase mirrored weight="regular" data-testid="test" weights={testWeights} />);
			const element = getByTestId(result.container, "test");

			expect(element.getAttribute("transform")).toBe("scale(-1, 1)");
		});

		it.concurrent("has the correct weight if no weight value passed in", () => {
			const result = render(<Icons.IconBase mirrored data-testid="test" weights={testWeights} />);
			const element = getByTestId(result.container, "test");
			expect(element.getAttribute("data-weight")).toBe("regular");
		});

		it.concurrent("has no title if alt prop is not passed", () => {
			const result = render(<Icons.IconBase mirrored data-testid="test" weights={testWeights} />);
			const element = result.queryByText(/svg title from alt prop/);

			expect(element).toBeNull();
		});

		it.concurrent("has no title if alt prop is passed", () => {
			const result = render(
				<Icons.IconBase mirrored data-testid="test" alt="svg title from alt prop" weights={testWeights} />
			);
			const element = result.queryByText(/svg title from alt prop/);

			expect(element).not.toBeNull();
		});
	});

	describe.concurrent.each(iconsMap)("Icon: $name", ({ name, Icon }) => {
		const testId = `test-${name}`;

		it.concurrent("is truthy", () => {
			expect(Icon).toBeTruthy();
		});

		it.concurrent("is properly named", () => {
			expect(name).toEqual(Icon.displayName);
		});

		it.concurrent("renders content", () => {
			const result = render(<Icon data-testid={testId} />);
			expect(getByTestId(result.container, testId)).toBeTruthy();
		});

		it.concurrent.each(["thin", "light", "regular", "bold", "fill", "duotone"] as Array<Icons.IconWeight>)(
			"with weight: ['%s'] renders",
			(weight) => {
				const result = render(<Icon weight={weight} data-testid={testId} />);
				const element = getByTestId(result.container, testId);
				expect(element).toBeTruthy();
				expect(element.getAttribute("data-weight")).toBe(weight);
			}
		);
	});
});

describe.concurrent("icon context", () => {
	const IconProvider = ({ children }: { children: React.ReactNode }) => {
		return (
			<Icons.IconContext.Provider
				value={{
					color: "salmon",
					weight: "light",
					mirrored: false,
				}}
			>
				{children}
			</Icons.IconContext.Provider>
		);
	};

	it.concurrent("icon should use values from the context", () => {
		const result = render(<Icons.Pulse data-testid="test" />, { wrapper: IconProvider });
		const element = getByTestId(result.container, "test");

		expect(element.getAttribute("fill")).toBe("salmon");
		expect(element.getAttribute("data-weight")).toBe("light");
		expect(element.getAttribute("transform")).toBeNull();
	});

	it.concurrent("icon should overrite context values", () => {
		const result = render(<Icons.Pulse data-testid="test" color="red" mirrored />, { wrapper: IconProvider });
		const element = getByTestId(result.container, "test");

		expect(element.getAttribute("fill")).toBe("red");
		expect(element.getAttribute("transform")).toBe("scale(-1, 1)");
	});

	it.concurrent("should use default values if no values passed to context", () => {
		const result = render(
			<Icons.IconContext.Provider value={{}}>
				<Icons.Pulse data-testid="test" />
			</Icons.IconContext.Provider>
		);
		const element = getByTestId(result.container, "test");

		expect(element.getAttribute("fill")).toBe("currentColor");
		expect(element.getAttribute("data-weight")).toBe("regular");
		expect(element.getAttribute("width")).toBeNull();
		expect(element.getAttribute("height")).toBeNull();
	});
});
