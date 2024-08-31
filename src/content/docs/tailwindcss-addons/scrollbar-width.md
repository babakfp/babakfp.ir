---
title: Scrollbar Width
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$lib/utils/tailwind.js"
    import { scrollbarWidth } from "tailwindcss-addons"
    const utilities = getUtilities(scrollbarWidth.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js

import { scrollbarWidth } from "tailwindcss-addons"

export default {
    plugins: [scrollbarWidth],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            scrollbarWidth: false, // Enabled by default.
        }),
    ],
}
```
