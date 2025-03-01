---
title: Drag
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["drag-none", "-webkit-user-drag: none;"],
        ["drag-element", "-webkit-user-drag: element;"],
        ["drag-auto", "-webkit-user-drag: auto;"],
    ]}
/>

- [Can I use `-webkit-user-drag`?](https://caniuse.com/webkit-user-drag)

## Import

This utility is imported by default.

### Manual

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/drag.css";
```
