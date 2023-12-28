---
title: Inset Center
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import {getUtilities} from '$utils/tailwind.js'
	import insetCenter from 'tailwindcss-addons/src/utilities/insetCenter.cjs'
	const utilities = getUtilities(insetCenter.handler);
</script>

<UtilsTable {utilities} />

## How to disable it?

```js
tailwindcssAddons({
    utilities: {
        insetCenter: false,
    },
})
```
