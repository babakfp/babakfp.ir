---
title: Flip
---

<script>
    import { flip } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtils } from "$utils/tailwind/getUtils.ts"

    const utilities = getUtils(flip)
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { flip } from "tailwindcss-addons"

export default {
    plugins: [flip],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            flip: false, // Enabled by default
        }),
    ],
}
```
