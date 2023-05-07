module.exports =
    () =>
    ({ addComponents }) => {
        // prettier-ignore
        addComponents({
			".pre-code-block": {
				"@apply rounded !bg-gray-50/5 p-0.5 text-sm [tab-size:4] highlight-gray-50/10 selection:bg-indigo-400/25": "",
			},
			".pre-code-block, .pre-code-block *": {
				"@apply !not-italic select-text": "",
			},
			".pre-code-block code": {
				"@apply block overflow-x-auto select-text p-6 leading-6": "",
			},
			".inline-code": {
				"@apply rounded py-1 px-1.5 bg-gray-50/10 text-[.9em] select-text highlight-gray-50/10 selection:bg-indigo-600/50": "",
			},
		})
    }
