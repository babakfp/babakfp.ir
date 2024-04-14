---
title: Unified
---

This is the default built-in [transformer](/docs/svelte-in-markdown/transformers).

```ts
import { transformer } from "svelte-in-markdown/transformers/unified"

svelteInMarkdownPreprocess({
    onTransform: async (options, config) => {
        return await transformer(options, config, {
            // Your options here!
        })
    },
}),
```

## Related resources

-   [`onTransform`](/docs/svelte-in-markdown/options#ontransform) in [`svelteInMarkdownPreprocess`](/docs/svelte-in-markdown/installation#setup).
