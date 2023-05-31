<script lang="ts" context="module">
    import img from "./img.svelte"
    import blockquote from "./blockquote.svelte"
    export { img, blockquote }
</script>

<script lang="ts">
    // Prevent warnings (<MdsvexLayout> was created with unknown prop 'title')
    export const title = ""
    export const description = ""
    export const updated = ""
    export const published = ""
</script>

<slot />
