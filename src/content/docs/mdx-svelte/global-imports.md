---
title: Global Imports / Auto Imports
---

`svelte.config.js`:

```ts
mdxPreprocess({
    globalImports: [
        {
            context: "module",
            imports: ['import MyComponent from "$lib/MyComponent.svelte"'],
        },
        {
            imports: [
                'import MyOtherComponent from "$lib/MyOtherComponent.svelte"',
            ],
        },
    ],
})
```
