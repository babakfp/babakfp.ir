---
title: Background Grid
---

-   Use `bg-grid-<color>` for adding a background grid.
-   Use `bg-grid-<spacing>` for altering the size of the squares.
-   Use `bg-grid-w-<spacing>` and `bg-grid-h-<spacing>` for altering the width and the height separately.
-   Use `bg-grid-border-<border-width>` for altering the thickness of the lines.

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { bgGrid } from "tailwindcss-addons"

export default {
    plugins: [bgGrid],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            bgGrid: false, // Enabled by default
        }),
    ],
}
```
