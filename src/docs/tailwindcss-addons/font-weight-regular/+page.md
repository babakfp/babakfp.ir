---
title: Font Weight Regular
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import { fontWeight } from 'tailwindcss-addons/src/presets/fontWeightRegular.cjs'
	let utilities = fontWeight;
	utilities = Object.entries(utilities).map(u => {
		return [`font-${u[0]}`, { 'font-weight': u[1] }]
	})
	utilities = Object.fromEntries(utilities)
</script>

By activating the option, your default `font-weight` configuration will be;

<UtilsTable {utilities} />

Basically, this will only rename the class `font-normal` to `font-regular`.

## How to enable it?

```js
tailwindcssAddons({
    presets: {
        fontWeightRegular: true,
    },
})
```
