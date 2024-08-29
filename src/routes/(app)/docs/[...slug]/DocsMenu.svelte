<script lang="ts">
    import Sidebar from "$lib/Sidebar/Sidebar.svelte"
    import DocsMenuItems from "./DocsMenuItems.svelte"

    export let isOpen = false
    export let class_ = ""
    export { class_ as class }
</script>

<Sidebar
    class="xl:min-w-56 xl:max-w-56 {class_}"
    id="docs-menu"
    bind:isOpen
    toggleButtonId="docs-menu-toggle"
    ariaLabel="Docs menu"
>
    <DocsMenuItems />
</Sidebar>
