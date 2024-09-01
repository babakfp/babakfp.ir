---
title: Extra Defaults
---

<script>
    import { extraDefaults } from "tailwindcss-addons"
</script>

Your tailwind config will be extended with these values:

<pre><code>{JSON.stringify(extraDefaults.config, null, 4)}</code></pre>

## Usage

### Single import

```js
// tailwind.config.js

import { extraDefaults } from "tailwindcss-addons"

export default {
    plugins: [extraDefaults],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            extraDefaults: false, // Enabled by default.
        }),
    ],
}
```
