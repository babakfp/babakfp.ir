---
title: Build a Transformer
---

```ts
import {
    type RequiredNonNullable,
    type MarkupPreprocessorOptions,
    type ConfigOutput,
} from "svelte-in-markdown"

type MyOptions = {}

const myTransformer = (async (
    // You get every markdown absolute file path and content one by one here.
    markupOptions: RequiredNonNullable<MarkupPreprocessorOptions>,
    // You get the config that is passed to the `svelteInMarkdownPreprocess()`.
    preprocessConfig: ConfigOutput,
    // This is your custom options.
    myOption?: MyOptions,
) => {}) satisfies SvelteInMarkdownConfigInput["onTransform"]

svelteInMarkdownPreprocess({
    onTransform: async (options, config) => {
        return await myTransformer(options, config, {
            // Your options here!
        })
    },
})
```
