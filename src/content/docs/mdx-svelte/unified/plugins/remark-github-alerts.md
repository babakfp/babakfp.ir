---
title: "remark-github-alerts"
---

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
