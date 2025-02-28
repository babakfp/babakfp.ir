---
title: Hocus Variants
---

<script>
    import dedent from "dedent"
    import ApiTable from "$lib/components/ApiTable.svelte"

    const utilities = [
        [
            "hocus",
            dedent`
                &:hover,
                &:focus
            `,
        ],
        [
            "hocus-within",
            dedent`
                &:hover,
                &:focus-within
            `,
        ],
        [
            "hocus-visible",
            dedent`
                &:hover,
                &:focus-visible
            `,
        ],
    ]
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={utilities}
/>

## Usage

### Single import

```js
// tailwind.config.js

import { hocus } from "tailwindcss-addons"

export default {
    plugins: [hocus],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            hocus: false, // Enabled by default.
        }),
    ],
}
```
