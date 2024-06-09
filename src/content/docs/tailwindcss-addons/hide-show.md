---
title: Hide & Show
---

<script>
	import UtilsTable from "$lib/UtilsTable.svelte"
	import { getUtilities } from "$lib/utils/tailwind.js"
	import { hideShow } from "tailwindcss-addons"
	const utilities = getUtilities(hideShow.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { hideShow } from "tailwindcss-addons"

export default {
    plugins: [hideShow],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            hideShow: false, // Enabled by default
        }),
    ],
}
```
