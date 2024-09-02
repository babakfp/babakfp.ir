---
title: Dir
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$lib/utils/tailwind.js"
    import { dir } from "tailwindcss-addons"
    const utilities = getUtilities(dir.handler);
</script>

<UtilsTable {utilities} />

-   [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)

## Usage

### Single import

```js
// tailwind.config.js

import { dir } from "tailwindcss-addons"

export default {
    plugins: [dir],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            dir: false, // Enabled by default.
        }),
    ],
}
```
