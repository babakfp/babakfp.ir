---
title: Reset Number Input
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
    
    const utilities = [
        [
            "reset-number-input",
            "@apply reset-number-input;",
        ],
    ]
</script>

A [preflight](https://tailwindcss.com/docs/preflight) CSS that removes the arrows from number inputs.

<ApiTable
    rows={utilities}
/>

## Import

This prefligh and its [utility](/tailwindcss-addons/utilities/reset-number-input) is imported by default.

### Manual

```css
@import "tailwindcss-addons/prefligh";
/* Or */
@import "tailwindcss-addons/prefligh/reset-number-input.css";
```
