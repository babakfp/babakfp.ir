---
title: Drag
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$utils/tailwind.js"
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

import addons from "tailwindcss-addons"

export default {
    plugins: [
        ...addons({
            drag: false, // Enabled by default
        }),
    ],
}
```
