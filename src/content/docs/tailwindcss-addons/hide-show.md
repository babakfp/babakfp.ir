---
title: Hide & Show
---

<script>
	import UtilsTable from "$lib/components/UtilsTable.svelte"
	import { getUtilities } from "$lib/utilities/tailwind.js"
	import { hideShow } from "tailwindcss-addons"
	const utilities = getUtilities(hideShow.handler);
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js

import { hideShow } from "tailwindcss-addons"

export default {
    plugins: [hideShow],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            hideShow: false, // Enabled by default.
        }),
    ],
}
```
