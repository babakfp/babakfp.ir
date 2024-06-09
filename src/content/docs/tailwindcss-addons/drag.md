---
title: Drag
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$lib/utils/tailwind.js"
    import { drag } from "tailwindcss-addons"
    const utilities = getUtilities(drag.handler);
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

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            drag: false, // Enabled by default
        }),
    ],
}
```
