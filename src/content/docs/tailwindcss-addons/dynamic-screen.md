---
title: Dynamic Screen
---

This feature will change the sizing unit in the `h-screen`, `max-h-screen`, and `min-h-screen` utilities, from `vh` to `dvh`. The same will also happen to the `w-screen` utility, from `vw` to `dvw`.

```css
:root: {
    --tw-screen-h: 100vh;
    --tw-screen-h: 100dvh;

    --tw-screen-w: 100vw;
    --tw-screen-w: 100dvw;
}
```

The browser will fall back to using `vh` and `vw` if `dvh` and `dvw` wasn't supported.

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { dynamicScreen } from "tailwindcss-addons"

export default {
    plugins: [dynamicScreen],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            dynamicScreen: false, // Enabled by default
        }),
    ],
}
```
