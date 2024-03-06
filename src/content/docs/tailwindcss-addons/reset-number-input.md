---
title: Reset Number Input
---

<script>
    import { resetNumberInput } from "tailwindcss-addons"
    import UtilsTable from "$lib/UtilsTable.svelte"
    import { getUtilities } from "$utils/tailwind/getUtilities.ts"

    const utilities = getUtilities(resetNumberInput())
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { resetNumberInput } from "tailwindcss-addons"

export default {
    plugins: [resetNumberInput()],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            resetNumberInput: false, // Enabled by default
        }),
    ],
}
```

## Options

```ts
function resetNumberInput(options?: { base?: boolean })
```

### `base`

If set to `true` the `reset-number-input` class gets included in the base styles as:

```css
input[type="number"] {
    @apply reset-number-input;
}
```
