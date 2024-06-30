---
title: Table of Contents
---

The default ["remark-toc"](https://npmjs.com/package/remark-toc) plugin may not generate a TOC for markdown files that are imported as Svelte components. To address this limitation, you can use a built-in function provided by the ["mdx-svelte"](https://github.com/babakfp/mdx-svelte) package.

## Example usage

```svelte
<!-- +layout.svelte -->

<script lang="ts">
    import { getTableOfContents } from "mdx-svelte"

    const headings = getTableOfContents({
        containerSelector: ".my-markdown-container",
        headingLevels: [2, 3, 4, 5, 6],
    })
</script>
```

Returns:

<!-- prettier-ignore -->
```json
[{
    "level": "2",
    "textContent": "Example usage",
    "attributes": { "id": "example-usage" }
}]
```

> [!WARNING]
> When using this solution, remember to disable the ["remark-toc"](https://npmjs.com/package/remark-toc) plugin.

## How to disable ["remark-toc"](https://npmjs.com/package/remark-toc) plugin?

```ts
import { transformer } from "mdx-svelte/transformers/unified"

mdxPreprocess({
    onTransform: async (options, config) => {
        return await transformer(options, config, {
            builtInPlugins: {
                remarkToc: {
                    enable: false,
                },
            },
        })
    },
})
```
