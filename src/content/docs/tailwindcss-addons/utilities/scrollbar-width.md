---
title: Scrollbar Width
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["scrollbar-auto", "scrollbar-width: auto;"],
        ["scrollbar-thin", "scrollbar-width: thin;"],
        ["scrollbar-none", "scrollbar-width: none;"],
    ]}
/>

- [`scrollbar-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)

## Import

This utility is imported by default.

### Manual

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/scrollbar-width.css";
```
