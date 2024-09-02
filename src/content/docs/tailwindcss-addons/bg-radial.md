---
title: Background Radial
---

<script>
    import Preview from "$lib/components/Preview.svelte"
</script>

## Examples

### Basic

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-radial-gray-700/
<div class="bg-radial-gray-700 ..." />
```

<!-- prettier-ignore -->
```css
.bg-radial-COLOR: {
    background-size: var(--tw-bg-radial-size, var(--tw-bg-radial-w, 32px)) var(--tw-bg-radial-size, var(--tw-bg-radial-h, 32px));
    background-image: radial-gradient(circle, COLOR var(--tw-bg-radial-circle-size, 1px), transparent 0px);
}
```

### Center

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-center"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-center/
<div class="bg-center bg-radial-gray-700 ..." />
```

### Shadow

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-center shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)]"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)]/
<div class="bg-center shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)] bg-radial-gray-700 ..." />
```

### Sizes

#### Width and Height

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-radial-4"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-radial-4/
<div class="bg-radial-gray-700 bg-radial-4 ..." />
```

```css
.bg-radial-SPACING: {
    --tw-bg-radial-size: SPACING;
}
```

#### Rows

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-radial-w-16"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-radial-w-16/
<div class="bg-radial-gray-700 bg-radial-w-16 ..." />
```

```css
.bg-radial-w-SPACING: {
    --tw-bg-radial-w: SPACING;
}
```

#### Columns

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-radial-h-16"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-radial-h-16/
<div class="bg-radial-gray-700 bg-radial-h-16 ..." />
```

```css
.bg-radial-h-SPACING: {
    --tw-bg-radial-h: SPACING;
}
```

### Border Width

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-radial-circle-2"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-radial-circle-2/
<div class="bg-radial-gray-700 bg-radial-circle-2 ..." />
```

```css
.bg-radial-circle-BORDER_WIDTH: {
    --tw-bg-radial-circle-size: BORDER_WIDTH;
}
```

## Usage

### Single import

```js
// tailwind.config.js

import { bgRadial } from "tailwindcss-addons"

export default {
    plugins: [bgRadial],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            bgRadial: false, // Enabled by default.
        }),
    ],
}
```
