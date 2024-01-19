---
title: TailwindCSS Addons
---

## Installation

```bash
pnpm add -D tailwindcss-addons
```

## How to use it

Add the code below into your `tailwind.config.js` file:

<!-- prettier-ignore -->
```js
import tailwindcssAddons from "tailwindcss-addons"

export default {
	presets: [
		tailwindcssAddons(),
	],
}
```

The function takes an `object` as an argument:

```js
tailwindcssAddons({
    // Here
})
```

### Default configuration

```js
const defaultConfig = {
    presets: {
        flexGrid: false,
        fontWeightRegular: false,
        moreDefaultValues: true,
        screenToDynamicScreen: false,
    },
    utilities: {
        bgGrid: true,
        bgRadial: true,
        dir: true,
        drag: true,
        flip: true,
        hideShow: true,
        inputResets: true,
        insetCenter: true,
        overflowUnset: true,
        tapHighlight: true,
    },
    variants: {
        notVariants: true,
    },
}
```

### Add or remove

Use `true` to include and use `false` to exclude.
