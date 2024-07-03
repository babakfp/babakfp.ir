---
title: Customize Markdown Elements
---

You can replace HTML elements of Markdown output with Svelte components.

`img.svelte` (The file name must match the HTML tag name):

```svelte
<script lang="ts">
    export let src: string
</script>

<img {src} />
```

`svelte.config.js`:

```ts
mdxPreprocess({
    elements: ["img"],
})
```

`+layout.svelte`:

```svelte
<script lang="ts" context="module">
    import img from "$lib/markdown/img.svelte"

    export const MdxElements = { img }
</script>

<script lang="ts">
    import { setContext } from "svelte"

    setContext("MdxElements", MdxElements)
</script>
```

## Related resources

-   Learn more about the [`elements`](/docs/mdx-svelte/options#elements) option.
