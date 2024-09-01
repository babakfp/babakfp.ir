---
title: Background Grid
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
	const bgGridColorUtilities = {
		'.bg-grid-<color>': {
            'background-size':
                'var(--tw-bg-grid-size, var(--tw-bg-grid-w, 32px)) var(--tw-bg-grid-size, var(--tw-bg-grid-h, 32px))',
            'background-image': `
                linear-gradient(to right, <color> var(--tw-bg-grid-border-w, 1px), transparent 0px),
                linear-gradient(to bottom, <color> var(--tw-bg-grid-border-w, 1px), transparent 0px)`,
		}
	}
    const bgGridSpacingSizeUtilities = {
		'.bg-grid-<spacing>': {
            '--tw-bg-grid-size': '<spacing>',
		}
	}
    const bgGridSpacingWidthUtilities = {
		'.bg-grid-w-<spacing>': {
            '--tw-bg-grid-w': '<spacing>',
		}
	}
    const bgGridSpacingHeightUtilities = {
		'.bg-grid-h-<spacing>': {
            '--tw-bg-grid-h': '<spacing>',
		}
	}
    const bgGridBorderWidthUtilities = {
		'.bg-grid-border-<border-width>': {
            "--tw-bg-grid-border-w": '<border-width>',
		}
	}
</script>

<UtilsTable utilities={bgGridColorUtilities} />

<br />

## Size

<UtilsTable utilities={bgGridSpacingSizeUtilities} />

<br />

### Width

<UtilsTable utilities={bgGridSpacingWidthUtilities} />

<br />

### Height

<UtilsTable utilities={bgGridSpacingHeightUtilities} />

<br />

## Border Width

<UtilsTable utilities={bgGridBorderWidthUtilities} />

## Usage

### Single import

```js
// tailwind.config.js

import { bgGrid } from "tailwindcss-addons"

export default {
    plugins: [bgGrid],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            bgGrid: false, // Enabled by default.
        }),
    ],
}
```
