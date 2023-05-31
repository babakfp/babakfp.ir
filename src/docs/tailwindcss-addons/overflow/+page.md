---
title: Overflow Unset
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.overflow-unset': {
			'overflow': 'unset',
		},
		'.overflow-y-unset': {
			'overflow-y': 'unset',
		},
		'.overflow-x-unset': {
			'overflow-x': 'unset',
		},
	}
</script>

<UtilsTable class="mt-4" {utilities} />

## How to disable it?

```js
tailwindcssAddons({
  utilities: {
    overflowUnset: false,
  },
})
```
