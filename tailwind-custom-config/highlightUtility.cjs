const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

module.exports =
	() =>
	({ matchUtilities, theme }) => {
		// This is for when the "shadow" and "highlight" utilities are used on the same element.
		const otherShadowUtilityValues =
			"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
		matchUtilities(
			{
				highlight: color => ({
					"box-shadow": `${otherShadowUtilityValues}, inset 0 1px 0 0 ${color}`,
				}),
			},
			{
				type: "color",
				values: flattenColorPalette(theme("backgroundColor")),
			}
		)
	}
