---
title: Tailwind CSS Addons
---

A set of Tailwind CSS plugins that add extra defaults, utilities, variants, and more.

## Install

```bash
pnpm add -D tailwindcss-addons
```

<!-- prettier-ignore -->
```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons(),
    ],
}
```

## Usage

### Single import

<!-- prettier-ignore -->
```js
// tailwind.config.js

import { /* <plugin-name> */ } from "tailwindcss-addons"

export default {
    plugins: [/* <plugin-name> */],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            /* <plugin-name> */: /* <boolean> */,
        }),
    ],
}
```

### Default options

When using multi import syntax, all options except `flexGrid` and `fontRegular` are enabled by default.

### Enable or disable

Use `true` to enable and use `false` to disable.
