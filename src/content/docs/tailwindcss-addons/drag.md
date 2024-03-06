---
title: Drag
---

<script>
    import { drag } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtils } from "$utils/tailwind/getUtils.ts"

    const utilities = getUtils(drag)
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { drag } from "tailwindcss-addons"

export default {
    plugins: [drag],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            drag: false, // Enabled by default
        }),
    ],
}
```
