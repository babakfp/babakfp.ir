---
title: Supports Focus
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

import { supportsFocus } from "tailwindcss-addons"

export default {
    plugins: [supportsFocus],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            supportsFocus: false, // Enabled by default
        }),
    ],
}
```
