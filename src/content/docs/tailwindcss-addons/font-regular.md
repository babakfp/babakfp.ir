---
title: Font Regular
---

By activating this option, the `font-normal` class will be renamed to `font-regular`.

## Usage

### Single import

```js
// tailwind.config.js | tailwind.config.ts

import { fontRegular } from "tailwindcss-addons"

export default {
    plugins: [fontRegular],
}
```

### Multi import

```js
// tailwind.config.js | tailwind.config.ts

import addons from "tailwindcss-addons"

export default {
    plugins: [
        ...addons({
            fontRegular: true, // Disabled by default
        }),
    ],
}
```
