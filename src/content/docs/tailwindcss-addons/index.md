---
title: TailwindCSS Addons
---

A TailwindCSS plugin that adds extra utilities and more.

## Installation

```bash
pnpm add -D tailwindcss-addons
```

<!-- prettier-ignore -->
```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons(),
    ],
}
```

## Usage

### Single import

<!-- prettier-ignore -->
```js
// tailwind.config.js | tailwind.config.ts

import { /* <plugin-name> */ } from "tailwindcss-addons"

export default {
    plugins: [/* <plugin-name> */],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import tailwindcssAddons from "tailwindcss-addons"

export default {
    plugins: [
        ...tailwindcssAddons({
            /* <plugin-name> */: /* <boolean> */,
        }),
    ],
}
```

### Default options

When using multi import syntax, all options except `flexGrid` and `fontRegular` are enabled by default.

### Enable or disable

Use `true` to enable and use `false` to disable.
