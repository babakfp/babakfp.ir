---
title: Hide & Show
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import {getUtilities} from '$utils/tailwind.js'
	import hideShow from 'tailwindcss-addons/src/utilities/hideShow.cjs'
	const utilities = getUtilities(hideShow.handler);
</script>

<UtilsTable {utilities} />

## How to disable it?

```js
tailwindcssAddons({
  utilities: {
    hideShow: false,
  },
})
```
