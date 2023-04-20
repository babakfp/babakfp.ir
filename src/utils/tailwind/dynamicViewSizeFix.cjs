module.exports = () => ({
	theme: {
		extend: {
			height: { screen: "var(--screen-h)" },
			maxHeight: { screen: "var(--screen-h)" },
			minHeight: { screen: "var(--screen-h)" },
			width: { screen: "var(--screen-w)" },
		},
	},
	plugins: [
		({ addBase }) => {
			addBase({
				":root": {
					"--screen-h": "100vh",
					"--screen-w": "100vw",
				},
			})
			addBase({
				":root": {
					"--screen-h": "100dvh",
					"--screen-w": "100dvw",
				},
			})
		},
	],
})
