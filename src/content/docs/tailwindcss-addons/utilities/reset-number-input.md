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

## Import

This utility and its [prefligh](/tailwindcss-addons/preflight/reset-number-input) is imported by default.

### Manual

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/reset-number-input.css";
```
