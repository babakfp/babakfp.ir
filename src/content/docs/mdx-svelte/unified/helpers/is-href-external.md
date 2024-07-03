---
title: isHrefExternal
---

This helper function helps you to check if a URL is external.

```ts
import { isHrefExternal } from "mdx-svelte/unified"

if (
    isHrefExternal("http://example.com") &&
    isHrefExternal("https://example.com")
) {
    // True
}
```
