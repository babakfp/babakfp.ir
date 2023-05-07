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
  presets: true,
  utilities: {
    dir: true,
    drag: true,
    flexGrid: false, // Not active by default
    flip: true,
    hideShow: true,
    inputResets: true,
    insetCenter: true,
    overflowUnset: true,
    fontWeightRegular: false, // Not active by default
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
