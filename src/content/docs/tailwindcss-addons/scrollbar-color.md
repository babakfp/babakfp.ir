---
title: Scrollbar Color
---

<script>
    import UtilsTable from "$lib/UtilsTable.svelte"
	const utilities = {
		'.scrollbar-thumb-<color>': {
            '--tw-scrollbar-thumb': '<value>',
            'scrollbar-color': 'var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)',
        },
        '.scrollbar-track-<color>': {
            '--tw-scrollbar-track': '<value>',
            'scrollbar-color': 'var(--tw-scrollbar-thumb) var(--tw-scrollbar-track)',
        },
	}
</script>

<UtilsTable {utilities} />

## Usage

### Single import

```js
// tailwind.config.js

import { scrollbarColor } from "tailwindcss-addons"

export default {
    plugins: [scrollbarColor],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            scrollbarColor: false, // Enabled by default.
        }),
    ],
}
```
