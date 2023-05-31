---
title: User Drag
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.drag-none': {
			'-webkit-user-drag': 'none',
		},
		'.drag-element': {
			'-webkit-user-drag': 'element',
		},
		'.drag-auto': {
			'-webkit-user-drag': 'auto',
		},
	}
</script>

<UtilsTable class="mt-4" {utilities} />

## How to disable it?

```js
tailwindcssAddons({
  utilities: {
    drag: false,
  },
})
```
