---
title: Inset Center
---

<script>
	import UtilsTable from "$lib/UtilsTable.svelte"
	import { getUtilities } from "$utils/tailwind.js"
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

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            insetCenter: false, // Enabled by default
        }),
    ],
}
```
