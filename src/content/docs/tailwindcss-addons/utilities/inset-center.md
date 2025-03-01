---
title: Inset Center
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["inset-center", "@apply top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2;"],
        ["inset-x-center", "@apply right-1/2 translate-x-1/2;"],
        ["inset-y-center", "@apply top-1/2 -translate-y-1/2;"],
    ]}
/>

## Import

This utility is imported by default.

### Manual

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/inset-center.css";
```
