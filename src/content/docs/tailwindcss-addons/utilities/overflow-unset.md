---
title: Overflow Unset
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["overflow-unset", "overflow: unset;"],
        ["overflow-y-unset", "overflow-y: unset;"],
        ["overflow-x-unset", "overflow-x: unset;"],
    ]}
/>

> [!NOTE]
> How is this userful? I don't remember. Feel free to open an issue or PR if you know.

## Import

This utility is imported by default.

### Manual

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/overflow-unset.css";
```
