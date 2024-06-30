---
title: Options
---

```ts
type Options = {
    extensions?: string[]
    markdownElementsStrategy?: "cheap" | "expensive"
    layouts?: {
        [x: string]: string[]
    }
    nodeModules?: {
        ignore?: boolean
        allowedDependencies?: string[]
    }
}

mdxPreprocess(options: Options)
```

## `extensions`

-   Type: `string[]`
-   Default: `[".md", ".svelte.md"]`

Include the extension of files to be preprocessed. Only include the markdown files (or similar), not the `.svelte` files or any other.

### Example with the default value

```ts
import { EXTENSIONS, mdxPreprocess } from "mdx-svelte"

const config = {
    extensions: EXTENSIONS,
    preprocess: [mdxPreprocess(), vitePreprocess()],
}
```

### Example with a custom value

```ts
import { DOT_SVELTE, mdxPreprocess } from "mdx-svelte"

const MY_CUSTOM_EXTENSION = ".hello"

const config = {
    extensions: [DOT_SVELTE, MY_CUSTOM_EXTENSION],
    preprocess: [
        mdxPreprocess({
            extensions: [MY_CUSTOM_EXTENSION],
        }),
        vitePreprocess(),
    ],
}
```

> [!IMPORTANT]
> Whatever value you add to the `extensions` option, it must be added to the `config.extensions` too.

## `markdownElementsStrategy`

-   Type: `"cheap" | "expensive"`
-   Default: `"cheap"`

This option is useful for replacing markdown elements with custom components.

> [!IMPORTANT]
> It's recommended to avoid using `"expensive"`, because it can 10x the bundle size.

When using `"expensive"`, you don't need configure the `layouts` option and use the `layout` frontmatter property in markdown files.

## `layouts`

-   Type: `{ [x: string]: string[] }`

This option is useful for replacing markdown elements with custom components.

This option is only useful when `markdownElementsStrategy` is set to `"cheap"` (which is the default value).

### Default layout

Example `svelte.config.js` file:

```ts
const config = {
    preprocess: [
        mdxPreprocess({
            layouts: {
                default: ["img", "blockquote"],
            },
        }),
        vitePreprocess(),
    ],
}
```

> [!TIP]
> The `default` key is useful for applying custom components to all markdown files without needing to add the `layout` frontmatter property to **all** markdown files.

Example `+layout.svelte` file:

```svelte
<script lang="ts" context="module">
    import blockquote from "./blockquote.svelte"
    import img from "./img.svelte"

    export const markdownElements = { img, blockquote }
</script>

<script lang="ts">
    import { setContext } from "svelte"

    setContext("markdownElements_", markdownElements)
    //                          ^ IMPORTANT
</script>

<slot />
```

A `getContext` will be injected to all of the markdown files to receive the value of `markdownElements`.

### Custom layouts

You can use different components for different collections like blog, documentation, etc.
As an example, let's create a layout named `blog`:

```ts
{
    layouts: {
        blog: ["img", "blockquote"],
    },
}
```

Add the following property into the frontmatter of a markdown file of a blog collection:

```yaml
---
layout: blog
---
```

## `nodeModules`

Type:

```ts
{
    ignore?: boolean // Default: `true`
    allowedDependencies?: string[] // Default: `[]`
}
```

> [!WARNING]
> Not implemented!

Set `ignore` to `false` to allow the files located in the `node_modules` folder be preprocessed.

If `ignore` was `true`, set exceptions to allow the files of some packages to be preprocess. Useful when you import a Markdown file from an external package. Add the name of the package to the `allowedDependencies` option.

## `onFileIgnore`

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

## `onTransform`

[Example](/docs/mdx-svelte/unified) usage.

> [!NOTE]
> Please refer to the jsDoc comments to learn more.
