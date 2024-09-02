---
title: Background Grid
---

<script>
	import UtilsTable from '$lib/UtilsTable.svelte'
    import Preview from "$lib/components/Preview.svelte"
    
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

## Preview

### Basic

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800"></div>
</Preview>

```svelte /bg-grid-gray-800/
<div class="... bg-grid-gray-800" />
```

### Center

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-center"></div>
</Preview>

```svelte /bg-center/
<div class="... bg-center bg-grid-gray-800" />
```

### Shadow

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-center shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)]"></div>
</Preview>

```svelte /shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)]/
<div
    class="... bg-center shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)] bg-grid-gray-800"
/>
```

### Sizes

#### Small/Big

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-grid-4"></div>
</Preview>

```svelte /bg-grid-4/
<div class="... bg-grid-gray-800 bg-grid-4" />
```

#### Rows

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-grid-w-16"></div>
</Preview>

```svelte /bg-grid-w-16/
<div class="... bg-grid-gray-800 bg-grid-w-16" />
```

#### Columns

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-grid-h-16"></div>
</Preview>

```svelte /bg-grid-h-16/
<div class="... bg-grid-gray-800 bg-grid-h-16" />
```

### Border Width

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-grid-border-2"></div>
</Preview>

```svelte /bg-grid-border-2/
<div class="... bg-grid-gray-800 bg-grid-border-2" />
```

## Utilities

### Base and Color

<UtilsTable utilities={bgGridColorUtilities} />

### Size

<UtilsTable utilities={bgGridSpacingSizeUtilities} />

#### Width

<UtilsTable utilities={bgGridSpacingWidthUtilities} />

#### Height

<UtilsTable utilities={bgGridSpacingHeightUtilities} />

### Border Width

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
