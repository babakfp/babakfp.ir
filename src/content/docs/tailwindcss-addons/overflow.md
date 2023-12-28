---
title: Overflow Unset
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import {getUtilities} from '$utils/tailwind.js'
	import overflowUnset from 'tailwindcss-addons/src/utilities/overflowUnset.cjs'
	const utilities = getUtilities(overflowUnset.handler);
</script>

<UtilsTable {utilities} />

## How to disable it?

```js
tailwindcssAddons({
    utilities: {
        overflowUnset: false,
    },
})
```
