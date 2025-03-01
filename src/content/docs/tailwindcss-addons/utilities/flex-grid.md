---
title: Flex & Grid
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
</script>

This feature will replace all Tailwind (`justify-content`, `justify-items`, `justify-self`, `align-content`, `align-items`, `align-self`, `place-content`, `place-items`, `place-self`) classes. You will no longer be able to use the original classes.

Tailwind CSS v4 doesn't support [disabling core plugins](https://tailwindcss.com/docs/upgrade-guide#disabling-core-plugins).

## Justify Content

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["jc-start", "justify-content: flex-start;"],
        ["jc-end", "justify-content: flex-end;"],
        ["jc-center", "justify-content: center;"],
        ["jc-between", "justify-content: space-between;"],
        ["jc-around", "justify-content: space-around;"],
        ["jc-evenly", "justify-content: space-evenly;"],
    ]}
/>

## Justify Items

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["ji-start", "justify-items: start;"],
        ["ji-end", "justify-items: end;"],
        ["ji-center", "justify-items: center;"],
        ["ji-stretch", "justify-items: stretch;"],
    ]}
/>

## Justify Self

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["js-auto", "justify-self: auto;"],
        ["js-start", "justify-self: start;"],
        ["js-end", "justify-self: end;"],
        ["js-center", "justify-self: center;"],
        ["js-stretch", "justify-self: stretch;"],
    ]}
/>

## Align Content

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["ac-center", "align-content: center;"],
        ["ac-start", "align-content: flex-start;"],
        ["ac-end", "align-content: flex-end;"],
        ["ac-between", "align-content: space-between;"],
        ["ac-around", "align-content: space-around;"],
        ["ac-evenly", "align-content: space-evenly;"],
    ]}
/>

## Align Items

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["ai-start", "align-items: flex-start;"],
        ["ai-end", "align-items: flex-end;"],
        ["ai-center", "align-items: center;"],
        ["ai-baseline", "align-items: baseline;"],
        ["ai-stretch", "align-items: stretch;"],
    ]}
/>

## Align Self

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["as-auto", "align-self: auto;"],
        ["as-start", "align-self: flex-start;"],
        ["as-end", "align-self: flex-end;"],
        ["as-center", "align-self: center;"],
        ["as-stretch", "align-self: stretch;"],
        ["as-baseline", "align-self: baseline;"],
    ]}
/>

## Place Content

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["pc-center", "place-content: center;"],
        ["pc-start", "place-content: start;"],
        ["pc-end", "place-content: end;"],
        ["pc-between", "place-content: space-between;"],
        ["pc-around", "place-content: space-around;"],
        ["pc-evenly", "place-content: space-evenly;"],
        ["pc-stretch", "place-content: stretch;"],
    ]}
/>

## Place Items

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["pi-start", "place-items: start;"],
        ["pi-end", "place-items: end;"],
        ["pi-center", "place-items: center;"],
        ["pi-stretch", "place-items: stretch;"],
    ]}
/>

## Place Self

<!-- prettier-ignore -->
<ApiTable
    rows={[
        ["ps-auto", "place-self: auto;"],
        ["ps-start", "place-self: start;"],
        ["ps-end", "place-self: end;"],
        ["ps-center", "place-self: center;"],
        ["ps-stretch", "place-self: stretch;"],
    ]}
/>

## Import

These utilities are NOT imported by default.

```css
@import "tailwindcss-addons/utilities/flex-grid.md";
```
