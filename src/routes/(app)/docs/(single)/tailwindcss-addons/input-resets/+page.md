<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		".reset-number-input": {
			"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
				// Using `display: none` crashes Chrome on hover
				"-webkit-appearance": "none",
				//  Apparently some margin are still there even though it's hidden
				margin: "0",
				// Firefox
				"-moz-appearance": "textfield",
			},
		},
		".reset-search-input": {
			"&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
				{
					"-webkit-appearance": "none",
				},
		},
	}
</script>

<UtilsTable class="mt-4" {utilities} />

## How to disable it?

```js
tailwindcssAddons({
	utilities: {
		inputResets: false,
	},
})
```
