---
title: Reset Number Input
---

<script>
    import dedent from "dedent"
    import ApiTable from "$lib/components/ApiTable.svelte"
    
    const utilities = [
        [
            "reset-number-input",
            dedent`
                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    /* Using \`display: none\` crashes Chrome on hover. */
                    -webkit-appearance: none;
                    /* Apparently some margin are still there even though it's hidden. */
                    margin: 0;
                    /* Firefox. */
                    -moz-appearance: textfield;
                }
            `,
        ],
    ]
</script>

Removes the arrows from number inputs.

<!-- prettier-ignore -->
<ApiTable
    rows={utilities}
/>

## Usage

### Single import

```js
// tailwind.config.js

import { resetNumberInput } from "tailwindcss-addons"

export default {
    plugins: [resetNumberInput()],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            resetNumberInput: false, // Enabled by default.
        }),
    ],
}
```

## Preflight

TODO
