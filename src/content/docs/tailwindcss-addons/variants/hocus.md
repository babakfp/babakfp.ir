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

## Import

This utility is imported by default.

### Manual

```css
@import "tailwindcss-addons/variants";
/* Or */
@import "tailwindcss-addons/variants/hocus.css";
```
