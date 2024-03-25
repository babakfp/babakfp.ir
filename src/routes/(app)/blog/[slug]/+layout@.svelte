<script lang="ts" context="module">
    import img from "./img.svelte"
    import blockquote from "./blockquote.svelte"

    export const markdownElements = { img, blockquote }
</script>

<script lang="ts">
    import { setContext } from "svelte"
    setContext("markdownElements", markdownElements)
</script>

<slot />
