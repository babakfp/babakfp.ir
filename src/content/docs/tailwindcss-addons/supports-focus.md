---
title: Supports Focus
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

import { supportsFocus } from "tailwindcss-addons"

export default {
    plugins: [supportsFocus],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            supportsFocus: false, // Enabled by default
        }),
    ],
}
```
