---
title: Inset Center
---

<script>
	import UtilsTable from "$lib/UtilsTable.svelte"
	import { getUtilities } from "$lib/utils/tailwind.js"
	import { insetCenter } from "tailwindcss-addons"
	const utilities = getUtilities(insetCenter.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { insetCenter } from "tailwindcss-addons"

export default {
    plugins: [insetCenter],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            insetCenter: false, // Enabled by default
        }),
    ],
}
```
