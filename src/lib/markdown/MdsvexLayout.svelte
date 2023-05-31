<script lang="ts" context="module">
    import img from "./img.svelte"
    import blockquote from "./blockquote.svelte"
    export { img, blockquote }
</script>

<script lang="ts">
    // Prevent warnings (<MdsvexLayout> was created with unknown prop 'title')
    export let title = ""
    export let description = ""
    export let updated = ""
    export let published = ""
</script>

<slot />
