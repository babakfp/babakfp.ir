---
title: Unified
---

The built-in ["unified"](https://github.com/unifiedjs/unified) transformer is a wrapper around the unified ecosystem.

```ts
import { unifiedTransformer } from "mdx-svelte/unified"

mdxPreprocess({
    onTransform: async (options, config) => {
        return await unifiedTransformer(options, config, {
            // Your options here!
        })
    },
})
```

## Related resources

-   [`onTransform`](/docs/mdx-svelte/options#ontransform) in [`mdxPreprocess`](/docs/mdx-svelte/installation#setup).
