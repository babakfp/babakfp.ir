---
title: Installation
---

```bash
pnpm add -D mdx-svelte
```

> [!IMPORTANT]
> This library is built to be used in SvelteKit projects only!

## Setup

Import the package and modify the `svelte.config.js` file:

```ts
import { EXTENSIONS, mdxPreprocess } from "mdx-svelte"

const config = {
    extensions: EXTENSIONS,
    preprocess: [mdxPreprocess(), vitePreprocess()],
}
```

> [!IMPORTANT]
> Place `mdxPreprocess()` before `vitePreprocess()`, Otherwise you will encounter unexpected behaviors!

**All done!** Create a `+page.md` file in the `src/routes` folder and add your content in!

<!-- prettier-ignore -->
```svelte
<script>
    import MyComponent from "./MyComponent.svelte"
    import MyMarkdownContent from "./MyMarkdownContent.md"
    
    let count = 0
</script>

# Hello, World

<button on:click={() => count += 1}>
    {count}
</button>

<MyComponent />
<MyMarkdownContent />
```

## More help

> [!NOTE]
> Everything is documented using jsDoc/tsDoc. Please take a look at everything that this library exports and all of the available configs and options to have a better understanding of things. Alternatively you can use [tsdocs.dev](https://tsdocs.dev/docs/mdx-svelte).
