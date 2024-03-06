---
title: Drag
---

<script>
    import { drag } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$utils/tailwind/getUtilities.ts"

    const utilities = getUtilities(drag)
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
