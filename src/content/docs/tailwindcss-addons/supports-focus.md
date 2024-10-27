---
title: Supports Focus
---

<script>
    import UtilsTable from "$lib/components/UtilsTable.svelte"
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

> [!TIP] Alternative
> You can use this [workaround](https://github.com/tailwindlabs/tailwindcss/discussions/1739#discussioncomment-3630717).

## Usage

### Single import

```js
// tailwind.config.js

import { supportsFocus } from "tailwindcss-addons"

export default {
    plugins: [supportsFocus],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            supportsFocus: false, // Enabled by default.
        }),
    ],
}
```
