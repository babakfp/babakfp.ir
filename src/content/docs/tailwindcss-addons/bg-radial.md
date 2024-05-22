---
title: Background Radial
---

-   Use `bg-radial-<color>` for adding a background radial.
-   Use `bg-radial-<spacing>` for altering the size of the boxes.
-   Use `bg-radial-w-<spacing>` and `bg-radial-h-<spacing>` for altering the width and the height separately.
-   Use `bg-radial-circle-<border-width>` for altering the size of the circle.

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { bgRadial } from "tailwindcss-addons"

export default {
    plugins: [bgRadial],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            bgRadial: false, // Enabled by default
        }),
    ],
}
```
