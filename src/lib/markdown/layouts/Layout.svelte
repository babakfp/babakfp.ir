<script lang="ts" module>
    import blockquote from "$lib/markdown/elements/blockquote.svelte"
    import img from "$lib/markdown/elements/img.svelte"
    import pre from "$lib/markdown/elements/pre.svelte"

    export const mdxElements = { blockquote, img, pre }
</script>

<script lang="ts">
    import "mdx-svelte/unified/remark-github-alerts/github-base.css"
    import "mdx-svelte/unified/remark-github-alerts/github-colors-dark.css"
    import { setContext, type Snippet } from "svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()

    setContext("mdxElements", mdxElements)
</script>

{@render children()}
