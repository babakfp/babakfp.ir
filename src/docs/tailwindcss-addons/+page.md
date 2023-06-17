---
title: TailwindCSS Addons
---

## Installation

```cmd
npm install -D tailwindcss-addons
```

## How to use it

Add the code below into your `tailwind.config.cjs` file:

<!-- prettier-ignore -->
```js
const tailwindcssAddons = require("tailwindcss-addons")
const config = {
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
    screenSizeFix: false,
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

```js
tailwindcssAddons({
  presets: false, // Excluded
  utilities: {
    flexGrid: true, // Included
  },
})
```
