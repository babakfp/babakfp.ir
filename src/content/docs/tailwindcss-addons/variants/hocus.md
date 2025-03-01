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
                &:focus {
                    @media (hover: hover)
                }
            `,
        ],
        [
            "hocus-within",
            dedent`
                &:hover,
                &:focus-within {
                    @media (hover: hover)
                }
            `,
        ],
        [
            "hocus-visible",
            dedent`
                &:hover,
                &:focus-visible {
                    @media (hover: hover)
                }
            `,
        ],
    ]
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={utilities}
/>

- [Hover styles on mobile](https://tailwindcss.com/docs/upgrade-guide#hover-styles-on-mobile)

## Import

This utility is imported by default.

### Manual

```css
@import "tailwindcss-addons/variants";
/* Or */
@import "tailwindcss-addons/variants/hocus.css";
```
