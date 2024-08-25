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

> [!TIP] Alternative
> You can use this [workaround](https://github.com/tailwindlabs/tailwindcss/discussions/1739#discussioncomment-3630717).

## Usage

### Single import

```js
// tailwind.config.js

import { supportsHocus } from "tailwindcss-addons"

export default {
    plugins: [supportsHocus],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            supportsHocus: false, // Enabled by default.
        }),
    ],
}
```
