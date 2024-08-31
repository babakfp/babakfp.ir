---
title: Scrollbar Color
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$lib/utils/tailwind.js"
    import { scrollbarColor } from "tailwindcss-addons"
    const utilities = getUtilities(scrollbarColor.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js

import { scrollbarColor } from "tailwindcss-addons"

export default {
    plugins: [scrollbarColor],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            scrollbarColor: false, // Enabled by default.
        }),
    ],
}
```
