---
title: Inset Center
---

<script>
	import UtilsTable from "$lib/components/UtilsTable.svelte"
	import { getUtilities } from "$lib/utilities/tailwind.js"
	import { insetCenter } from "tailwindcss-addons"
	const utilities = getUtilities(insetCenter.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js

import { insetCenter } from "tailwindcss-addons"

export default {
    plugins: [insetCenter],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            insetCenter: false, // Enabled by default.
        }),
    ],
}
```
