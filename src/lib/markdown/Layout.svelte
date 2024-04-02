<script lang="ts" context="module">
    import img from "$lib/markdown/img.svelte"
    import blockquote from "$lib/markdown/blockquote.svelte"

    export const markdownElements = { img, blockquote }
</script>

<script lang="ts">
    import { setContext } from "svelte"

    setContext("markdownElements_", markdownElements)
</script>

<slot />
