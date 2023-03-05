export default function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	plop.setHelper("isFill", (weight, name) => {
		return weight === "fill" && name !== "DropHalf";
	});

	plop.setGenerator("icon", {
		actions: [
			{
				type: "add",
				path: "src/icons/{{ pascalCase name }}.tsx",
				templateFile: "plop-templates/icon.hbs",
				force: true,
			},
		],
	});

	plop.setGenerator("export", {
		actions: [
			{
				type: "add",
				path: "src/index.ts",
				templateFile: "plop-templates/export.hbs",
				force: true,
			},
		],
	});
}
