---
title: Flip
---

<script>
    import ApiTable from "$lib/components/ApiTable.svelte"
    import Preview from "$lib/components/Preview.svelte"

    const utilities = [
        ["flip", "@apply scale-x-[-1] scale-y-[-1];"],
        ["flip-x", "@apply scale-x-[-1];"],
        ["flip-y", "@apply scale-y-[-1];"],
    ]
</script>

<!-- prettier-ignore -->
<ApiTable
    rows={utilities}
/>

- [Tailwind CSS: `scale`](https://tailwindcss.com/docs/scale)
- [MDN Web Docs: `scale()
`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale)

- [Point reflection](https://en.wikipedia.org/wiki/Point_reflection)

## Examples

<Preview class="p-8">
    <div class="flex flex-wrap gap-8">
        <div class="grid gap-4 justify-items-center flex-1">
            <span class="text-gray-400 font-mono">...</span>
            <div class="border-t-2 border-l-2 border-gray-200 size-8"></div>
        </div>
        {#each Object.keys(utilities) as utility}
            <div class="grid gap-4 justify-items-center flex-1">
                <span class="text-gray-400 font-mono">.{utility}</span>
                <div class="border-t-2 border-l-2 border-gray-200 size-8 {utility}"></div>
            </div>
        {/each}
    </div>
</Preview>

## Import

This utility is imported by default.

### Manual

```css
@import "tailwindcss-addons/utilities";
/* Or */
@import "tailwindcss-addons/utilities/flip.css";
```
