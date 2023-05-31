---
title: Tap Highlight
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.tap-highlight-transparent': {
			'-webkit-tap-highlight-color': 'transparent',
		},
		'.tap-highlight-white': {
			'-webkit-tap-highlight-color': '#fff',
		},
		'.tap-highlight-black': {
			'-webkit-tap-highlight-color': '#000',
		},
	}
</script>

<UtilsTable class="mt-4" {utilities} />

- <a href="https://tailwindcss.com/docs/customizing-colors" target="_blank" rel="noreferrer">See all colors</a>
- <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank" rel="noreferrer">Changing the opacity</a>
- <a href="https://tailwindcss.com/docs/background-color#arbitrary-values" target="_blank" rel="noreferrer">Arbitrary values</a>

## How to disable it?

```js
tailwindcssAddons({
  utilities: {
    tapHighlight: false,
  },
})
```
