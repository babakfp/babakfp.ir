---
title: Overflow Unset
---

<script>
    import { overflowUnset } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtils } from "$utils/tailwind/getUtils.ts"

    const utilities = getUtils(overflowUnset)
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

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            overflowUnset: false, // Enabled by default
        }),
    ],
}
```
