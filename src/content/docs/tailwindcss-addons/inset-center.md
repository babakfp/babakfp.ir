---
title: Inset Center
---

<script>
    import { insetCenter } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtils } from "$utils/tailwind/getUtils.ts"

    const utilities = getUtils(insetCenter)
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
