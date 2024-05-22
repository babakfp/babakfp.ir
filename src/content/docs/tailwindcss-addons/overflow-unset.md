---
title: Overflow Unset
---

<script>
	import UtilsTable from "$lib/UtilsTable.svelte"
	import { getUtilities } from "$utils/tailwind.js"
	import { overflowUnset } from "tailwindcss-addons"
	const utilities = getUtilities(overflowUnset.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { overflowUnset } from "tailwindcss-addons"

export default {
    plugins: [overflowUnset],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import addons from "tailwindcss-addons"

export default {
    plugins: [
        ...addons({
            overflowUnset: false, // Enabled by default
        }),
    ],
}
```
