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

Removes the x (value clear button) from search inputs.

<!-- prettier-ignore -->
<ApiTable
    rows={utilities}
/>

## Import

This utility and its [prefligh](/tailwindcss-addons/preflight/reset-search-input) is imported by default.

### Manual

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/reset-search-input.css";
```
