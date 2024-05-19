---
title: Supports Focus
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$utils/tailwind.js"
    import { supportsFocus } from "tailwindcss-addons"
    const utilities = getUtilities(supportsFocus.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { supportsFocus } from "tailwindcss-addons"

export default {
    plugins: [supportsFocus],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            supportsFocus: false, // Enabled by default
        }),
    ],
}
```
