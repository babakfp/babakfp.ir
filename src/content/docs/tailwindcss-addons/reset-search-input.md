---
title: Reset Search Input
---

<script>
	import UtilsTable from '$lib/components/UtilsTable.svelte'
	import { getUtilities } from "$lib/utilities/tailwind.js"
    import { resetSearchInput } from "tailwindcss-addons"
    const utilities = getUtilities(resetSearchInput().handler);
</script>

Removed the x from search inputs.

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js

import { resetSearchInput } from "tailwindcss-addons"

export default {
    plugins: [resetSearchInput()],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            resetSearchInput: false, // Enabled by default.
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
