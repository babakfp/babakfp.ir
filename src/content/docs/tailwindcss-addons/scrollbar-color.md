---
title: Scrollbar Color
---

<script>
    import UtilsTable from "$lib/components/UtilsTable.svelte"
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

- [`scrollbar-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color)
- [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

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
