---
title: Customize Markdown Elements
---

It's possible to replace Markdown elements (HTML tags) rendered into the page with Svelte components! Example:

```svelte
<!-- img.svelte - The file name must match the HTML tag name. -->

<script lang="ts">
    export let src: string
</script>

<img {src} />
```

Modify preprocessor config:

```ts
svelteInMarkdownPreprocess({
    layouts: {
        default: ["img"],
    },
})
```

Modify your `+layout.svelte` file:

```svelte
<script lang="ts" context="module">
    //            ^^^^^^^^^^^^^^^^ IMPORTANT

    import img from "$lib/markdown/img.svelte"

    export const markdownElements = { img }
</script>

<script lang="ts">
    import { setContext } from "svelte"

    setContext("markdownElements_", markdownElements)
    //                          ^ IMPORTANT
</script>
```

## Related resources

-   Learn more about the [`layouts`](/docs/svelte-in-markdown/options#layouts) option.
