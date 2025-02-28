---
title: Scrollbar Width
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["scrollbar-auto", "scrollbar-width: auto;"],
        ["scrollbar-thin", "scrollbar-width: thin;"],
        ["scrollbar-none", "scrollbar-width: none;"],
    ]}
/>

- [`scrollbar-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)

## Usage

### Single import

```js
// tailwind.config.js

import { scrollbarWidth } from "tailwindcss-addons"

export default {
    plugins: [scrollbarWidth],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            scrollbarWidth: false, // Enabled by default.
        }),
    ],
}
```
