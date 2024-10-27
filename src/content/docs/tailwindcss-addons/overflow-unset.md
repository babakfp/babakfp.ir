---
title: Overflow Unset
---

<script>
	import UtilsTable from "$lib/UtilsTable.svelte"
	import { getUtilities } from "$lib/utilities/tailwind.js"
	import { overflowUnset } from "tailwindcss-addons"
	const utilities = getUtilities(overflowUnset.handler);
</script>

<UtilsTable {utilities} />

> [!NOTE]
> How is this userful? I don't remember. Feel free to open an issue or PR if you know.

## Usage

### Single import

```js
// tailwind.config.js

import { overflowUnset } from "tailwindcss-addons"

export default {
    plugins: [overflowUnset],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            overflowUnset: false, // Enabled by default.
        }),
    ],
}
```
