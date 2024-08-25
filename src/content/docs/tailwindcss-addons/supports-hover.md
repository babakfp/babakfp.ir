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

> [!TIP] Alternative
> You can use this [workaround](https://github.com/tailwindlabs/tailwindcss/discussions/1739#discussioncomment-3630717).

## Usage

### Single import

```js
// tailwind.config.js

import { supportsHover } from "tailwindcss-addons"

export default {
    plugins: [supportsHover],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            supportsHover: false, // Enabled by default.
        }),
    ],
}
```
