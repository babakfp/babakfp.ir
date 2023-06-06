---
title: Tap Highlight
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.tap-highlight-TAILWIND_COLOR_NAME': {
			'-webkit-tap-highlight-color': 'TAILWIND_COLOR_VALUE',
		}
	}
</script>

<UtilsTable {utilities} />

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
