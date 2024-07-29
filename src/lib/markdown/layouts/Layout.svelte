<script lang="ts" context="module">
    import BlockCode from "$lib/markdown/elements/BlockCode.svelte"
    import blockquote from "$lib/markdown/elements/blockquote.svelte"
    import img from "$lib/markdown/elements/img.svelte"

    export const mdxElements = { BlockCode, img, blockquote }
</script>

<script lang="ts">
    import "mdx-svelte/unified/remark-github-alerts/github-base.css"
    import "mdx-svelte/unified/remark-github-alerts/github-colors-dark-media.css"
    import { setContext } from "svelte"

    setContext("mdxElements", mdxElements)
</script>

<slot />
