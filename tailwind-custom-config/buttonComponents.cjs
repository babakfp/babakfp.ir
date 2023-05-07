module.exports =
    () =>
    ({ addComponents }) => {
        // prettier-ignore
        addComponents({
			".btn": {
				"@apply relative inline-flex items-center justify-center rounded bg-gray-800 px-3 py-2 text-sm text-gray-50 duration-100 drag-none highlight-gray-50/10 hover:bg-gray-700": "",
			},
			".btn-icon": {
				"@apply h-9 w-9 p-0 text-gray-400 hover:text-gray-50": "",
			},
			".btn-link": {
				"@apply btn bg-indigo-400/30 text-indigo-300 hover:bg-indigo-400/40 hover:text-indigo-200": "",
			},
		})
    }
