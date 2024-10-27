---
title: Drag
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$lib/utilities/tailwind.js"
    import { drag } from "tailwindcss-addons"
    const utilities = getUtilities(drag.handler);
</script>

<UtilsTable {utilities} />

-   [Can I use `-webkit-user-drag`?](https://caniuse.com/webkit-user-drag)

## Usage

### Single import

```js
// tailwind.config.js

import { drag } from "tailwindcss-addons"

export default {
    plugins: [drag],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            drag: false, // Enabled by default.
        }),
    ],
}
```
