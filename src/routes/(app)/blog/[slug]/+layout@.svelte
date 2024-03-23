<script lang="ts" context="module">
    import img from "./img.svelte"
    import blockquote from "./blockquote.svelte"

    export const MarkdownElements = { img, blockquote }
</script>

<script lang="ts">
    import { setContext } from "svelte"
    setContext("MarkdownElements", MarkdownElements)
</script>

<slot />
