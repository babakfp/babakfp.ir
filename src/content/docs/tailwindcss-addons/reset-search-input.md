---
title: Reset Search Input
---

<script>
    import { resetSearchInput } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$utils/tailwind/getUtilities.ts"

    const utilities = getUtilities(resetSearchInput())
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { resetSearchInput } from "tailwindcss-addons"

export default {
    plugins: [resetSearchInput()],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            resetSearchInput: false, // Enabled by default
        }),
    ],
}
```

## Options

```ts
function resetSearchInput(options?: { base?: boolean })
```

### `base`

If set to `true` the `reset-search-input` class gets included in the base styles as:

```css
input[type="search"] {
    @apply reset-search-input;
}
```
