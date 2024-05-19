---
title: Supports Hocus
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    const utilities = {
		".supports-focus": {
			"@media (focus: focus)": "",
		},
        ".supports-focus-within": {
			"@media (focus-within: focus-within)": "",
		},
        ".supports-focus-visible": {
			"@media (focus-visible: focus-visible)": "",
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

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            supportsHocus: false, // Enabled by default
        }),
    ],
}
```
