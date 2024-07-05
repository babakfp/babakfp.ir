---
title: Unified plugins
---

## "remark-frontmatter"

["remark-frontmatter"](https://npmjs.com/package/remark-frontmatter).

It's configured to use the `"yaml"` format by default.

### TOML

If you want to use TOML, change the `options` property of `remarkFrontmatter` plugin to `toml`.

```ts
mdxPreprocess({
    onTransform: async (markup, options) => {
        return await unifiedTransformer(markup, options, {
            builtInPlugins: {
                remarkFrontmatter: {
                    options: "toml",
                },
            },
        })
    },
})
```

If you want to use both Yaml and TOML, change it to `["yaml", "toml"]`.

You also need to add a plugin to parse the TOML content and pass in to a property called `frontmatter` in `file.data`. Learn how it's done for Yaml in ["remark-frontmatter-yaml"](https://npmjs.com/package/remark-frontmatter-yaml).

Add you custom plugin inside the `builtinPlugins` after `remarkFrontmatter`.

```ts
{
    builtInPlugins: {
        remarkFrontmatter: {
            plugins: {
                after: remarkFrontmatterToml,
            }
        },
        // Disable the default Yaml plugin if you want to only use TOML.
        remarkFrontmatterYaml: {
            enable: false
        },
    }
}
```

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

### Related resources

-   ["remark-frontmatter-yaml"](/docs/mdx-svelte/unified/plugins#remark-frontmatter-yaml)

## "remark-frontmatter-yaml"

["remark-frontmatter-yaml"](https://npmjs.com/package/remark-frontmatter-yaml).

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

### Related resources

-   ["remark-frontmatter"](/docs/mdx-svelte/unified/plugins#remark-frontmatter)

## "remark-gfm"

["remark-gfm"](https://npmjs.com/package/remark-gfm).

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

## "remark-github-alerts"

> [!IMPORTANT]
> This plugin is a fork of ["remark-github-alerts"](https://npmjs.com/package/remark-github-alerts). It's an improved version with some minor changes to the API.

To get the built-in styles working for this plugin, add the following code into your layout file:

```svelte
<script>
    import "mdx-svelte/unified/remark-github-alerts/github-base.css"
    import "mdx-svelte/unified/remark-github-alerts/github-colors-dark-media.css"
</script>
```

All importable styles:

```svelte
<script>
    import "mdx-svelte/unified/remark-github-alerts/github-base.css"
    import "mdx-svelte/unified/remark-github-alerts/github-colors-dark-class.css"
    import "mdx-svelte/unified/remark-github-alerts/github-colors-dark-media.css"
    import "mdx-svelte/unified/remark-github-alerts/github-colors-light.css"
</script>
```

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

## "remark-unwrap-images"

["remark-unwrap-images"](https://npmjs.com/package/remark-unwrap-images).

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

## "remark-toc"

["remark-toc"](https://npmjs.com/package/remark-toc).

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

### Related resources

-   [TOC - Table of Contents](/docs/mdx-svelte/table-of-contents)

## "rehype-slug"

["rehype-slug"](https://npmjs.com/package/rehype-slug).

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

## "rehype-shiki"

["rehype-shiki"](https://npmjs.com/package/rehype-shiki).

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

### Example usage

```ts
{
    rehypeShiki: {
        options: {
            theme: "rose-pine-moon",
            langs: [
                "html",
                "css",
                "js",
                "svelte",
                "php",
                "bash",
                "yaml",
            ],
        },
    },
}
```

## "rehype-autolink-headings"

["rehype-autolink-headings"](https://npmjs.com/package/rehype-autolink-headings).

> [!NOTE]
> Please refer to the jsDoc comments to learn more.

### Example usage

```ts
import { hastFromHtml } from "mdx-svelte/unified"

rehypeAutolinkHeadings: {
    enable: true,
    options: {
        behavior: "append",
        properties: {
            class: "heading-permalink",
            "aria-label": "Permalink to this headline",
        },
        content() {
            return hastFromHtml(
                '<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"/></svg>',
            )
        },
        test: ["h2", "h3", "h4", "h5", "h6"],
    },
},
```

### Related resources

-   [Table of Contents](/docs/mdx-svelte/table-of-contents)

## "rehype-external-links"

["rehype-external-links"](https://npmjs.com/package/rehype-external-links).

This plugin sets the `target` attribute to `"_blank"` and the `rel` attribute to `"nofollow noopener noreferrer"` for hyperlinks containing `"http://"` or `"https://"`.

> [!NOTE]
> Please refer to the jsDoc comments to learn more.
