---
title: Reset Search Input
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		".reset-search-input": {
			"&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
				{
					"-webkit-appearance": "none",
				},
		},
	}
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { resetSearchInput } from "tailwindcss-addons"

export default {
    plugins: [resetSearchInput],
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
