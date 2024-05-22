---
title: Reset Search Input
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	import { getUtilities } from "$utils/tailwind.js"
    import { resetSearchInput } from "tailwindcss-addons"
    const utilities = getUtilities(resetSearchInput().handler);
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

import addons from "tailwindcss-addons"

export default {
    plugins: [
        ...addons({
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
