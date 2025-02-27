---
title: Flip
---

<script>
	import UtilsTable from "$lib/components/UtilsTable.svelte"
	import { getUtilities } from "$lib/utilities/tailwind.js"
	import { flip } from "tailwindcss-addons"
    import Preview from "$lib/components/Preview.svelte"
	const utilities = getUtilities(flip.handler);
</script>

<UtilsTable {utilities} />

- [Point reflection](https://en.wikipedia.org/wiki/Point_reflection)

## Examples

<Preview class="p-8">
    <div class="flex flex-wrap gap-8">
        <div class="grid gap-4 justify-items-center flex-1">
            <span class="text-gray-400 font-mono">...</span>
            <div class="border-t-2 border-l-2 size-8"></div>
        </div>
        {#each Object.keys(utilities) as classWithDot}
            {@const class_ = classWithDot.replace(".", "")}
            <div class="grid gap-4 justify-items-center flex-1">
                <span class="text-gray-400 font-mono">{classWithDot}</span>
                <div class="border-t-2 border-l-2 size-8 {class_}"></div>
            </div>
        {/each}
    </div>
</Preview>

## Usage

### Single import

```js
// tailwind.config.js

import { flip } from "tailwindcss-addons"

export default {
    plugins: [flip],
}
```

### Multi import

```js
// tailwind.config.js

import { allAddons } from "tailwindcss-addons"

export default {
    plugins: [
        ...allAddons({
            flip: false, // Enabled by default.
        }),
    ],
}
```
