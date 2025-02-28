---
title: Reset Search Input
---

<script>
    import dedent from "dedent"
    import ApiTable from "$lib/components/ApiTable.svelte"

    const utilities = [
        [
            "reset-search-input",
            dedent`
                &::-webkit-search-decoration,
                &::-webkit-search-cancel-button,
                &::-webkit-search-results-button,
                &::-webkit-search-results-decoration {
                    -webkit-appearance: none;
                }
            `,
        ],
    ]
</script>

Removed the x from search inputs.

<!-- prettier-ignore -->
<ApiTable
    rows={utilities}
/>

## Usage

### Single import

```js
// tailwind.config.js

import { resetSearchInput } from "tailwindcss-addons"

export default {
    plugins: [resetSearchInput()],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            resetSearchInput: false, // Enabled by default.
        }),
    ],
}
```

## Preflight

TODO
