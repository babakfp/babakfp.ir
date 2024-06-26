---
title: "rehype-autolink-headings"
---

["rehype-autolink-headings"](https://npmjs.com/package/rehype-autolink-headings).

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

## Example usage

```ts
import { hastFromHtml } from "mdx-svelte/transformers/unified"

rehypeAutolinkHeadings: {
    enable: true,
    options: {
        behavior: "append",
        properties: {
            class: "heading-permalink",
            "aria-label": "Permalink to this headline",
        },
        content() {
            return hastFromHtml(
                `<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"/></svg>`,
            )
        },
        test: ["h2", "h3", "h4", "h5", "h6"],
    },
},
```

## Related resources

-   [Table of Contents](/docs/mdx-svelte/table-of-contents)
