---
title: Dir
---

<script>
    import { dir } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$utils/tailwind/getUtilities.ts"

    const utilities = getUtilities(dir)
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { dir } from "tailwindcss-addons"

export default {
    plugins: [dir],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            dir: false, // Enabled by default
        }),
    ],
}
```
