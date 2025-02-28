---
title: Inset Center
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["inset-center", "@apply top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2;"],
        ["inset-x-center", "@apply right-1/2 translate-x-1/2;"],
        ["inset-y-center", "@apply top-1/2 -translate-y-1/2;"],
    ]}
/>

## Usage

### Single import

```js
// tailwind.config.js

import { insetCenter } from "tailwindcss-addons"

export default {
    plugins: [insetCenter],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            insetCenter: false, // Enabled by default.
        }),
    ],
}
```
