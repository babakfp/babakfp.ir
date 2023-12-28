---
title: Direction
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import {getUtilities} from '$utils/tailwind.js'
	import dir from 'tailwindcss-addons/src/utilities/dir.cjs'
	const utilities = getUtilities(dir.handler);
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
