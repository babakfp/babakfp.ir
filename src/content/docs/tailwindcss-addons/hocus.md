---
title: Hocus Variants
---

<script>
	import UtilsTable from "$lib/UtilsTable.svelte"
	const utilities = {
		".hocus": {
			"&:hover": "",
			"&:focus": "",
		},
		".hocus-within": {
			"&:hover": "",
			"&:focus-within": "",
		},
		".hocus-visible": {
			"&:hover": "",
			"&:focus-visible": "",
		},
	}
</script>

<UtilsTable {utilities} />

In order to use this feature, your Tailwind version must support the [`matchVariant`](https://tailwindcss.com/docs/plugins#dynamic-variants) feature. You're safe if using `v3.2.1` or above (I'm not sure about the older versions).

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { hocus } from "tailwindcss-addons"

export default {
    plugins: [hocus],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            hocus: false, // Enabled by default
        }),
    ],
}
```
