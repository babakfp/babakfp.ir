---
title: Flip
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import {getUtilities} from '$utils/tailwind.js'
	import flip from 'tailwindcss-addons/src/utilities/flip.cjs'
	const utilities = getUtilities(flip.handler);
</script>

<UtilsTable {utilities} />

## How to disable it?

```js
tailwindcssAddons({
    utilities: {
        flip: false,
    },
})
```
