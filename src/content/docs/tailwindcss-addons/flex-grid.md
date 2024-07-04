---
title: Flex & Grid
---

<script>
	import UtilsTable from "$lib/UtilsTable.svelte"
	import { getUtilities } from "$lib/utils/tailwind.js"
	import { flexGrid } from "tailwindcss-addons"
	const utilities = getUtilities(flexGrid.handler)

	const getClassUtils = (classStartsWith) => {
		const utils = Object.entries(utilities).filter(util => {
			const className = util[0]
			return className.startsWith(classStartsWith)
		})
		return Object.fromEntries(utils)
	}
</script>

This feature will replace all Tailwind (`justify-content`, `justify-items`, `justify-self`, `align-content`, `align-items`, `align-self`, `place-content`, `place-items`, `place-self`) classes. You will no longer be able to use the original classes.

## Justify Content

<UtilsTable utilities="{() => getClassUtils('.jc')}" />

## Justify Items

<UtilsTable utilities="{() => getClassUtils('.ji')}" />

## Justify Self

<UtilsTable utilities="{() => getClassUtils('.js')}" />

## Align Content

<UtilsTable utilities="{() => getClassUtils('.ac')}" />

## Align Items

<UtilsTable utilities="{() => getClassUtils('.ai')}" />

## Align Self

<UtilsTable utilities="{() => getClassUtils('.as')}" />

## Place Content

<UtilsTable utilities="{() => getClassUtils('.pc')}" />

## Place Items

<UtilsTable utilities="{() => getClassUtils('.pi')}" />

## Place Self

<UtilsTable utilities="{() => getClassUtils('.ps')}" />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { flexGrid } from "tailwindcss-addons"

export default {
    plugins: [flexGrid],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            flexGrid: true, // Disabled by default
        }),
    ],
}
```
