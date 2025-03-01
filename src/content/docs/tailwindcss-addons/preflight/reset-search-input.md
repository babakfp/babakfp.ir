---
title: Reset Search Input
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"

    const utilities = [
        [
            "reset-search-input",
            "@apply reset-search-input;",
        ],
    ]
</script>

A [preflight](https://tailwindcss.com/docs/preflight) CSS that removes the arrows from number inputs.

<ApiTable
    rows={utilities}
/>

## Import

This prefligh and its [utility](/tailwindcss-addons/utilities/reset-search-input) is imported by default.

### Manual

```css
@import "tailwindcss-addons/prefligh";
/* Or */
@import "tailwindcss-addons/prefligh/reset-search-input.css";
```
