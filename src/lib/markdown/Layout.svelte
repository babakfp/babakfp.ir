<script lang="ts" context="module">
    import img from "$lib/markdown/elements/img.svelte"
    import blockquote from "$lib/markdown/elements/blockquote.svelte"

    export const markdownElements = { img, blockquote }
</script>

<script lang="ts">
    import "svelte-in-markdown/transformers/unified/remark-github-alerts/github-base.css"
    import "svelte-in-markdown/transformers/unified/remark-github-alerts/github-colors-dark-media.css"

    import { setContext } from "svelte"

    setContext("markdownElements_", markdownElements)
</script>

<slot />
