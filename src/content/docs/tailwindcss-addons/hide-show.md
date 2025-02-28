---
title: Hide & Show
---

<script>
    import dedent from "dedent"
    import ApiTable from "$lib/components/ApiTable.svelte"

    const utilities = [
        [
            "hide",
            dedent`
                visibility: hidden;
                opacity: 0;
                pointer-events: none;
            `,
        ],
        [
            "show",
            dedent`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
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

import { hideShow } from "tailwindcss-addons"

export default {
    plugins: [hideShow],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            hideShow: false, // Enabled by default.
        }),
    ],
}
```
