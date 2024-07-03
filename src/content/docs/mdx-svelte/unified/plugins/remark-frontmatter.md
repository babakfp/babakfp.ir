---
title: "remark-frontmatter"
---

["remark-frontmatter"](https://npmjs.com/package/remark-frontmatter).

It's configured to use the `"yaml"` format by default.

## TOML

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

## Related resources

-   ["remark-frontmatter-yaml"](/docs/mdx-svelte/unified/plugins/remark-frontmatter-yaml)
