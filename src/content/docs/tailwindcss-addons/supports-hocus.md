---
title: Supports Hocus
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$utils/tailwind.js"
    import { supportsHocus } from "tailwindcss-addons"
    const utilities = getUtilities(supportsHocus.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { supportsHocus } from "tailwindcss-addons"

export default {
    plugins: [supportsHocus],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            supportsHocus: false, // Enabled by default
        }),
    ],
}
```
