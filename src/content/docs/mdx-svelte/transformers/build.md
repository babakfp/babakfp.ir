---
title: Build a Transformer
---

```ts
import {
    type ConfigOutput,
    type MarkupPreprocessorOptions,
    type RequiredNonNullable,
} from "mdx-svelte"

type MyOptions = {}

const myTransformer = (async (
    // You get every markdown absolute file path and content one by one here.
    markupOptions: RequiredNonNullable<MarkupPreprocessorOptions>,
    // You get the config that is passed to the `mdxPreprocess()`.
    preprocessConfig: ConfigOutput,
    // This is your custom options.
    myOption?: MyOptions,
) => {}) satisfies MdxPreprocessConfigSchemaInput["onTransform"]

mdxPreprocess({
    onTransform: async (options, config) => {
        return await myTransformer(options, config, {
            // Your options here!
        })
    },
})
```
