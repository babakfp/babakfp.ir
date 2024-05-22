---
title: Not Variants
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.not-first': {
			'&:not(:first-child)': '',
		},
		'.not-last': {
			'&:not(:last-child)': '',
		},
		'.not-first-of-type': {
			'&:not(:first-of-type)': '',
		},
		'.not-last-of-type': {
			'&:not(:last-of-type)': '',
		},
		'.not-[<value>]': {
			'&:not(<value>)': '',
		},
	}
</script>

<UtilsTable {utilities} />

In order to use this feature, your Tailwind version must support the [`matchVariant`](https://tailwindcss.com/docs/plugins#dynamic-variants) feature. You're safe if using `v3.2.1` or above (I'm not sure about the older versions).

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { not } from "tailwindcss-addons"

export default {
    plugins: [not],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            not: false, // Enabled by default
        }),
    ],
}
```
