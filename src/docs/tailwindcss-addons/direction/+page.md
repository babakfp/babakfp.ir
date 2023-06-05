---
title: Direction
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.dir-rtl': {
			'direction': 'rtl',
		},
		'.dir-ltr': {
			'direction': 'ltr',
		},
	}
</script>

<UtilsTable {utilities} />

## How to disable it?

```js
tailwindcssAddons({
  utilities: {
    dir: false,
  },
})
```
