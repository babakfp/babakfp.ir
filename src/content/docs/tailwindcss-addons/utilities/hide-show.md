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

## Import

This utility is imported by default.

### Manual

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/hide-show.css";
```
