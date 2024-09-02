---
title: Background Grid
---

<script>
    import Preview from "$lib/components/Preview.svelte"
</script>

## Examples

### Basic

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-grid-gray-800/
<div class="bg-grid-gray-800 ..." />
```

<!-- prettier-ignore -->
```css
.bg-grid-COLOR: {
    background-size: var(--tw-bg-grid-size, var(--tw-bg-grid-w, 32px)) var(--tw-bg-grid-size, var(--tw-bg-grid-h, 32px));
    background-image: linear-gradient(to right, COLOR var(--tw-bg-grid-border-w, 1px), transparent 0px), linear-gradient( to bottom, COLOR var(--tw-bg-grid-border-w, 1px), transparent 0px);
}
```

### Center

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-center"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-center/
<div class="bg-center bg-grid-gray-800 ..." />
```

### Shadow

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-center shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)]"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)]/
<div class="bg-center shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)] bg-grid-gray-800 ..." />
```

### Sizes

#### Width and Height

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-grid-4"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-grid-4/
<div class="bg-grid-gray-800 bg-grid-4 ..." />
```

```css
.bg-grid-SPACING: {
    --tw-bg-grid-size: SPACING;
}
```

#### Rows

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-grid-w-16"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-grid-w-16/
<div class="bg-grid-gray-800 bg-grid-w-16 ..." />
```

```css
.bg-grid-w-SPACING: {
    --tw-bg-grid-w: SPACING;
}
```

#### Columns

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-grid-h-16"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-grid-h-16/
<div class="bg-grid-gray-800 bg-grid-h-16 ..." />
```

```css
.bg-grid-h-SPACING: {
    --tw-bg-grid-h: SPACING;
}
```

### Border Width

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-grid-border-2"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-grid-border-2/
<div class="bg-grid-gray-800 bg-grid-border-2 ..." />
```

```css
.bg-grid-border-BORDER_WIDTH: {
    --tw-bg-grid-border-w: BORDER_WIDTH;
}
```

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
