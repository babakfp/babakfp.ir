---
title: Drag
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["drag-none", "-webkit-user-drag: none;"],
        ["drag-element", "-webkit-user-drag: element;"],
        ["drag-auto", "-webkit-user-drag: auto;"],
    ]}
/>

- [Can I use `-webkit-user-drag`?](https://caniuse.com/webkit-user-drag)

## Usage

### Single import

```js
// tailwind.config.js

import { drag } from "tailwindcss-addons"

export default {
    plugins: [drag],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            drag: false, // Enabled by default.
        }),
    ],
}
```
