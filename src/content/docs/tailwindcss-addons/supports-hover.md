---
title: Supports Hover
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$utils/tailwind.js"
    import { supportsHover } from "tailwindcss-addons"
    const utilities = getUtilities(supportsHover.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { supportsHover } from "tailwindcss-addons"

export default {
    plugins: [supportsHover],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            supportsHover: false, // Enabled by default
        }),
    ],
}
```
