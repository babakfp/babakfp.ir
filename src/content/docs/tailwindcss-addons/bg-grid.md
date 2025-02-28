---
title: Background Grid
---

<script>
    import dedent from "dedent"
    import ApiTable from "$lib/components/ApiTable.svelte"
    import Preview from "$lib/components/Preview.svelte"

    const utilities = [
        [
            "bg-grid-<theme-color>",
            dedent`
                background-size: var(--tw-bg-grid-w, 32px) var(--tw-bg-grid-h, 32px);
                background-image: linear-gradient(to right, var(--<theme-color>) var(--tw-bg-grid-border-w, 1px), transparent 0px), linear-gradient( to bottom, var(--<theme-color>) var(--tw-bg-grid-border-w, 1px), transparent 0px);
            `,
        ],
        [
            "bg-grid-(<custom-property>)",
            dedent`
                background-size: var(--tw-bg-grid-w, 32px) var(--tw-bg-grid-h, 32px);
                background-image: linear-gradient(to right, var(<custom-property>) var(--tw-bg-grid-border-w, 1px), transparent 0px), linear-gradient( to bottom, var(<custom-property>) var(--tw-bg-grid-border-w, 1px), transparent 0px);
            `,
        ],
        [
            "bg-grid-[<arbitrary-value>]",
            dedent`
                background-size: var(--tw-bg-grid-w, 32px) var(--tw-bg-grid-h, 32px);
                background-image: linear-gradient(to right, <arbitrary-value> var(--tw-bg-grid-border-w, 1px), transparent 0px), linear-gradient( to bottom, <arbitrary-value> var(--tw-bg-grid-border-w, 1px), transparent 0px);
            `,
        ],
    ]
</script>

## Examples

### Basic

<!-- prettier-ignore -->
<ApiTable
    rows={utilities}
/>

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-grid-gray-800/
<div class="bg-grid-gray-800 ..." />
```

- [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
- [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [`background-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
- [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

### Center

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-center"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /bg-center/
<div class="bg-center bg-grid-gray-800 ..." />
```

- [`background-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)

### Shadow

<Preview useGrid={false}>
    <div class="h-32 bg-grid-gray-800 bg-center shadow-[inset_0_0_4rem_2rem_var(--color-gray-900)]"></div>
</Preview>

<!-- prettier-ignore -->
```svelte /shadow-[inset_0_0_4rem_2rem_var(--color-gray-900)]/
<div class="bg-center shadow-[inset_0_0_4rem_2rem_var(--color-gray-900)] bg-grid-gray-800 ..." />
```

- [`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)

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
    --tw-bg-grid-w: SPACING;
    --tw-bg-grid-h: SPACING;
}
```

- [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

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

- [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

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

- [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

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

- [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

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
