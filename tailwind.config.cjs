const tailwindcssAddons = require("tailwindcss-addons")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")
const containerUtility = require("./src/utils/tailwind/containerUtility.cjs")
const outlineInsetUtility = require("./src/utils/tailwind/outlineInsetUtility.cjs")
const highlightUtility = require("./src/utils/tailwind/highlightUtility.cjs")
const buttonComponents = require("./src/utils/tailwind/buttonComponents.cjs")
const codeBlockComponents = require("./src/utils/tailwind/codeBlockComponents.cjs")
const linkComponents = require("./src/utils/tailwind/linkComponents.cjs")
const scrollbar = require("./src/utils/tailwind/scrollbar.cjs")

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts,md}"],
	presets: [
		tailwindcssAddons({
			dynamicViewFix: true,
		}),
		containerUtility(),
	],
	theme: {
		extend: {
			spacing: {
				"header-h": "var(--header-h)",
			},
			colors: {
				gray: {
					...colors.zinc,
					950: "#09090b", // TODO: Remove this after update Tailwindcss to new version
				},
			},
			borderRadius: {
				DEFAULT: "0.5rem",
			},
		},
		fontFamily: {
			sans: ["Quicksand", defaultTheme.fontFamily.sans],
			title: ["UniNeue", "Quicksand", defaultTheme.fontFamily.sans],
			mono: ["MonoLisa", defaultTheme.fontFamily.mono],
		},
		fontWeight: {
			// thin: "100",
			// extralight: "200",
			// light: "300",
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "700",
			// extrabold: "800",
			// black: "900",
		},
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		outlineInsetUtility(),
		highlightUtility(),
		buttonComponents(),
		codeBlockComponents(),
		linkComponents(),
		scrollbar(),
	],
}
