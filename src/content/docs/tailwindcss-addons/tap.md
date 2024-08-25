---
title: Tap
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.tap-<color>': {
			'-webkit-tap-color': '<value>',
		}
	}
</script>

<UtilsTable {utilities} />

-   [What is `-webkit-tap-color`?](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color)
-   <a href="https://tailwindcss.com/docs/customizing-colors" target="_blank" rel="noreferrer">See all colors</a>
-   <a href="https://tailwindcss.com/docs/background-color#changing-the-opacity" target="_blank" rel="noreferrer">Changing the opacity</a>
-   <a href="https://tailwindcss.com/docs/background-color#arbitrary-values" target="_blank" rel="noreferrer">Arbitrary values</a>

## Usage

### Single import

```js
// tailwind.config.js

import { tap } from "tailwindcss-addons"

export default {
    plugins: [tap],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            tap: false, // Enabled by default.
        }),
    ],
}
```
