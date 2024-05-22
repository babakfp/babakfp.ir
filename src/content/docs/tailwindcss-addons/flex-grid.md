---
title: Flex & Grid
---

<script>
	import UtilsTable from "$lib/UtilsTable.svelte"
	import { getUtilities } from "$utils/tailwind.js"
	import { flexGrid } from "tailwindcss-addons"
	const utilities = getUtilities(flexGrid.handler)

	const justifyContent = getUtilsOfASpesificClass(".jc")
	const justifyItems = getUtilsOfASpesificClass(".ji")
	const justifySelf = getUtilsOfASpesificClass(".js")
	const alignContent = getUtilsOfASpesificClass(".ac")
	const alignItems = getUtilsOfASpesificClass(".ai")
	const alignSelf = getUtilsOfASpesificClass(".as")
	const placeContent = getUtilsOfASpesificClass(".pc")
	const placeItems = getUtilsOfASpesificClass(".pi")
	const placeSelf = getUtilsOfASpesificClass(".ps")

	function getUtilsOfASpesificClass(classStartsWith) {
		const utils = Object.entries(utilities).filter(util => {
			const className = util[0]
			return className.startsWith(classStartsWith)
		})
		return Object.fromEntries(utils)
	}
</script>

This feature will replace all Tailwind (`justify-content`, `justify-items`, `justify-self`, `align-content`, `align-items`, `align-self`, `place-content`, `place-items`, `place-self`) classes. You will no longer be able to use the original classes.

## Justify Content

<UtilsTable utilities={justifyContent} />

## Justify Items

<UtilsTable utilities={justifyItems} />

## Justify Self

<UtilsTable utilities={justifySelf} />

## Align Content

<UtilsTable utilities={alignContent} />

## Align Items

<UtilsTable utilities={alignItems} />

## Align Self

<UtilsTable utilities={alignSelf} />

## Place Content

<UtilsTable utilities={placeContent} />

## Place Items

<UtilsTable utilities={placeItems} />

## Place Self

<UtilsTable utilities={placeSelf} />

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
