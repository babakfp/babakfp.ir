---
title: Tap
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const utilities = {
		'.tap-<color>': {
			'-webkit-tap-highlight-color': '<value>',
		}
	}
</script>

<UtilsTable {utilities} />

-   [What is `-webkit-tap-highlight-color`?](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color)
-   [See all colors](https://tailwindcss.com/docs/customizing-colors)
-   [Changing the opacity](https://tailwindcss.com/docs/background-color#changing-the-opacity)
-   [Arbitrary values](https://tailwindcss.com/docs/background-color#arbitrary-values)

> [!NOTE]
> The tap color is transparent by default, when using Tailwind CSS.

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
