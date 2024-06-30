---
title: Unified
---

This is the default built-in [transformer](/docs/mdx-svelte/transformers).

```ts
import { transformer } from "mdx-svelte/transformers/unified"

mdxPreprocess({
    onTransform: async (options, config) => {
        return await transformer(options, config, {
            // Your options here!
        })
    },
})
```

## Related resources

-   [`onTransform`](/docs/mdx-svelte/options#ontransform) in [`mdxPreprocess`](/docs/mdx-svelte/installation#setup).
