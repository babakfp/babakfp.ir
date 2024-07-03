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

**All done!** Create `src/routes/+page.md` and add your content in:

<!-- prettier-ignore -->
```svelte
---
title: Hello, World!
---

<script>
    // import Markdown from "./Markdown.md"
    // import Component from "./Component.svelte"

    let count = 0
</script>

# {frontmatter.title}

The title of this page is {frontmatter.title}!

<button on:click={() => count += 1}>
    {count}
</button>

<!-- <Markdown /> -->
<!-- <Component /> -->

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demands immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

## More help

> [!NOTE]
> Some features and functionalities are documented using jsDoc/tsDoc. Please take a look at everything that this library exports and all of the available configs and options to have a better understanding of things.

You can always send PRs to improve the documentation.
