---
title: Dir
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["dir-rtl", "direction: rtl;"],
        ["dir-ltr", "direction: ltr;"],
    ]}
/>

- [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)

## Usage

### Single import

```js
// tailwind.config.js

import { dir } from "tailwindcss-addons"

export default {
    plugins: [dir],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            dir: false, // Enabled by default.
        }),
    ],
}
```
