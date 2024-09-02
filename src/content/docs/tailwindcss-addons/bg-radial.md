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
    background-size: var(--tw-bg-radial-gap-x, 32px) var(--tw-bg-radial-gap-y, 32px);
    background-image: radial-gradient(circle, COLOR var(--tw-bg-radial-size, 1px), transparent 0px);
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

### Spacing

#### X and Y

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-radial-gap-4"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-radial-gap-4/
<div class="bg-radial-gray-700 bg-radial-gap-4 ..." />
```

```css
.bg-radial-gap-SPACING: {
    --tw-bg-radial-gap-x: SPACING;
    --tw-bg-radial-gap-y: SPACING;
}
```

#### X

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-radial-gap-x-16"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-radial-gap-x-16/
<div class="bg-radial-gray-700 bg-radial-gap-x-16 ..." />
```

```css
.bg-radial-gap-x-SPACING: {
    --tw-bg-radial-gap-x: SPACING;
}
```

#### Y

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-radial-gap-y-16"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-radial-gap-y-16/
<div class="bg-radial-gray-700 bg-radial-gap-y-16 ..." />
```

```css
.bg-radial-gap-y-SPACING: {
    --tw-bg-radial-gap-y: SPACING;
}
```

## Size

<Preview useGrid={false}>
    <div class="h-32 bg-radial-gray-700 bg-radial-size-2"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-radial-size-2/
<div class="bg-radial-gray-700 bg-radial-size-2 ..." />
```

```css
.bg-radial-size-BORDER_WIDTH: {
    --tw-bg-radial-size: BORDER_WIDTH;
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
