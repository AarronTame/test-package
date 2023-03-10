export default function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
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

	plop.setGenerator("icon-types", {
		actions: [
			{
				type: "add",
				path: "src/lib/icons.ts",
				templateFile: "plop-templates/icon-type.hbs",
				force: true,
			},
		],
	});
}
