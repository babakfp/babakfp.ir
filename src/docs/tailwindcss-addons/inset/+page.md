---
title: Inset Center
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import { cssTransformValue } from '$utils/cssTransformValue'
	const utilities = {
		'.inset-center': {
			'top': '50%',
			'right': '50%',
			'--tw-translate-x': '50%',
			'--tw-translate-y': '-50%',
			'transform': cssTransformValue,
		},
		'.inset-x-center': {
			'right': '50%',
			'--tw-translate-x': '50%',
			'transform': cssTransformValue,
		},
		'.inset-y-center': {
			'top': '50%',
			'--tw-translate-y': '-50%',
			'transform': cssTransformValue,
		},
	}
</script>

<UtilsTable class="mt-4" {utilities} />

## How to disable it?

```js
tailwindcssAddons({
  utilities: {
    insetCenter: false,
  },
})
```
