---
title: Reset Number Input
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import { getUtilities } from "$lib/utils/tailwind.js"
    import { resetNumberInput } from "tailwindcss-addons"
    const utilities = getUtilities(resetNumberInput().handler);
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

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
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
