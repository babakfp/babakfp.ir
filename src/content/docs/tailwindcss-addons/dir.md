---
title: Dir
---

<script>
    import { dir } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtils } from "$utils/tailwind/getUtils.ts"

    const utilities = getUtils(dir)
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
