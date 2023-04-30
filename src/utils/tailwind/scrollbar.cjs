module.exports =
	() =>
	({ addBase, addUtilities }) => {
		addUtilities({
			".scrollbar": { overflow: "auto" },
			".scrollbar-x": { "overflow-x": "auto" },
			".scrollbar-y": { "overflow-y": "auto" },
		})
		addUtilities({
			".scrollbar": { overflow: "overlay" },
			".scrollbar-x": { "overflow-x": "overlay" },
			".scrollbar-y": { "overflow-y": "overlay" },
		})
		// prettier-ignore
		addBase({
			"::-webkit-scrollbar": {
				"@apply h-2.5 w-2.5": "",
				"&-thumb": {
					"@apply h-12 max-h-[40%] w-12 max-w-[40%] rounded-full border-4 border-solid border-transparent bg-gray-600 bg-clip-padding": "",
				},
			},
		})
	}
