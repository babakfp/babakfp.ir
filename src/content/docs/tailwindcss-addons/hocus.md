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

## Usage

### Single import

```js
// tailwind.config.js

import { hocus } from "tailwindcss-addons"

export default {
    plugins: [hocus],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            hocus: false, // Enabled by default.
        }),
    ],
}
```
