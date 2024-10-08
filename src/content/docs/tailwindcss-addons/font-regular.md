---
title: Font Regular
---

By activating this option, the `font-normal` class will be renamed to `font-regular`.

## Usage

### Single import

```js
// tailwind.config.js

import { fontRegular } from "tailwindcss-addons"

export default {
    plugins: [fontRegular],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            fontRegular: true, // Disabled by default.
        }),
    ],
}
```
