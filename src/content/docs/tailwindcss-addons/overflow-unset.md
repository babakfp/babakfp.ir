---
title: Overflow Unset
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["overflow-unset", "overflow: unset;"],
        ["overflow-y-unset", "overflow-y: unset;"],
        ["overflow-x-unset", "overflow-x: unset;"],
    ]}
/>

> [!NOTE]
> How is this userful? I don't remember. Feel free to open an issue or PR if you know.

## Usage

### Single import

```js
// tailwind.config.js

import { overflowUnset } from "tailwindcss-addons"

export default {
    plugins: [overflowUnset],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            overflowUnset: false, // Enabled by default.
        }),
    ],
}
```
