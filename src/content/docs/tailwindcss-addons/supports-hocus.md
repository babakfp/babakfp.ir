---
title: Supports Hocus
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
   	const utilities = {
		".supports-hocus": {
			"@media (hover: hover) and (focus: focus)": "",
		},
		".supports-hocus-within": {
			"@media (hover: hover) and (focus-within: focus-within)": "",
		},
		".supports-hocus-visible": {
			"@media (hover: hover) and (focus-visible: focus-visible)": "",
		},
	}
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { supportsHocus } from "tailwindcss-addons"

export default {
    plugins: [supportsHocus],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            supportsHocus: false, // Enabled by default
        }),
    ],
}
```
