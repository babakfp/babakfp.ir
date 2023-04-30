module.exports =
	() =>
	({ addUtilities }) => {
		addUtilities({
			".outline-inset": {
				"@apply -outline-offset-2": "",
			},
		})
	}
