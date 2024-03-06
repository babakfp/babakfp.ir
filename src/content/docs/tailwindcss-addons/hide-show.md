---
title: Hide Show
---

<script>
    import { hideShow } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$utils/tailwind/getUtilities.ts"

    const utilities = getUtilities(hideShow)
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { hideShow } from "tailwindcss-addons"

export default {
    plugins: [hideShow],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            hideShow: false, // Enabled by default
        }),
    ],
}
```
