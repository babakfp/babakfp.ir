<script lang="ts" context="module">
    import blockquote from "$lib/markdown/elements/blockquote.svelte"
    import img from "$lib/markdown/elements/img.svelte"
    import pre from "$lib/markdown/elements/pre.svelte"

    export const mdxElements = { img, blockquote, pre }
</script>

<script lang="ts">
    import "mdx-svelte/unified/remark-github-alerts/github-base.css"
    import "mdx-svelte/unified/remark-github-alerts/github-colors-dark-media.css"
    import { setContext } from "svelte"

    setContext("mdxElements", mdxElements)
</script>

<slot />
