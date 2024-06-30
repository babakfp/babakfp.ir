---
title: "remark-frontmatter"
---

["remark-frontmatter"](https://npmjs.com/package/remark-frontmatter).

## TOML

If you want to use TOML, you need to change the `options` property of `remarkFrontmatter` plugin to `toml`.

```ts
{
    builtInPlugins: {
        remarkFrontmatter: {
            options: "toml",
        },
    }
}
```

If you want to use both Yaml and TOML, you need to change it to `["yaml", "toml"]`.

```ts
{
    builtInPlugins: {
        remarkFrontmatter: {
            options: ["yaml", "toml"],
        },
    }
}
```

You also need to add a plugin to parse the content and pass in to a property called `frontmatter` in `file.data`.Learn how it's done for Yaml in ["remark-frontmatter-yaml"](https://npmjs.com/package/remark-frontmatter-yaml).

Add you custom plugin inside the `builtinPlugins` after `remarkFrontmatter`.

```ts
{
    builtInPlugins: {
        remarkFrontmatter: {
            plugins: {
                after: remarkFrontmatterToml,
            }
        },
        // Disable the default Yaml plugin if you want to use only TOML.
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
