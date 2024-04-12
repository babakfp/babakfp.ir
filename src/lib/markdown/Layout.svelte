<script lang="ts" context="module">
    import img from "$lib/markdown/img.svelte"
    import blockquote from "$lib/markdown/blockquote.svelte"

    export const markdownElements = { img, blockquote }
</script>

<script lang="ts">
    import "remark-github-alerts/styles/github-colors-dark-media.css"
    import "remark-github-alerts/styles/github-base.css"

    import { setContext } from "svelte"

    setContext("markdownElements_", markdownElements)
</script>

<slot />
