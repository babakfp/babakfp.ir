<script lang="ts" context="module">
    import blockquote from "$lib/markdown/elements/blockquote.svelte"
    import img from "$lib/markdown/elements/img.svelte"

    export const markdownElements = { img, blockquote }
</script>

<script lang="ts">
    import "mdx-svelte/transformers/unified/remark-github-alerts/github-base.css"
    import "mdx-svelte/transformers/unified/remark-github-alerts/github-colors-dark-media.css"
    import { setContext } from "svelte"

    setContext("markdownElements_", markdownElements)
</script>

<slot />
