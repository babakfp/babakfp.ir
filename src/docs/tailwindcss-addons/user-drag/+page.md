---
title: User Drag
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import {getUtilities} from '$utils/tailwind.js'
	import drag from 'tailwindcss-addons/src/utilities/drag.cjs'
	const utilities = getUtilities(drag.handler);
</script>

<UtilsTable {utilities} />

## How to disable it?

```js
tailwindcssAddons({
    utilities: {
        drag: false,
    },
})
```
