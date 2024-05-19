---
title: Supports Hover
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
	const utilities = {
		".supports-hover": {
			"@media (hover: hover)": "",
		},
	}
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { supportsHover } from "tailwindcss-addons"

export default {
    plugins: [supportsHover],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            supportsHover: false, // Enabled by default
        }),
    ],
}
```
