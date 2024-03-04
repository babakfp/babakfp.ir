---
title: Reset Number Input
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		".reset-number-input": {
			"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
				// Using `display: none` crashes Chrome on hover
				"-webkit-appearance": "none",
				//  Apparently some margin are still there even though it's hidden
				margin: "0",
				// Firefox
				"-moz-appearance": "textfield",
			},
		},
	}
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { resetNumberInput } from "tailwindcss-addons"

export default {
    plugins: [resetNumberInput],
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
