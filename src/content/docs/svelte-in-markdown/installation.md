---
title: Installation
---

> [!IMPORTANT]
> This library is built to be used in SvelteKit projects only!

```bash
pnpm add -D svelte-in-markdown
```

## Setup

### Modify `svelte.config.js`

```ts
import {
    SVELTE_EXTENSIONS,
    svelteInMarkdownPreprocess,
} from "svelte-in-markdown"

const config = {
    extensions: SVELTE_EXTENSIONS,
    preprocess: [svelteInMarkdownPreprocess(), vitePreprocess()],
}
```

> [!IMPORTANT]
> Add `svelteInMarkdownPreprocess()` before `vitePreprocess()`.

### Modify `+layout.svelte`

Following code helps you to get access to the frontmatter data in your layout file:

```svelte
<script lang="ts">
    import { setContext } from "svelte"

    setContext("markdownElements_", markdownElements)
    //                          ^ IMPORTANT
</script>
```

## More help

> [!NOTE]
> Everything is documented using jsDoc/tsDoc. Please take a look at everything that this library exports and all of the available configs and options to have a better understanding of things. Alternatively you can use [tsdocs.dev](https://tsdocs.dev/docs/svelte-in-markdown).
