---
title: Dir
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["dir-rtl", "direction: rtl;"],
        ["dir-ltr", "direction: ltr;"],
    ]}
/>

- [`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)

## Import

This utility is imported by default.

### Manual

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/dir.css";
```
