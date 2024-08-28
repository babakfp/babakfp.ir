<script lang="ts">
    import Sidebar from "$lib/Sidebar/Sidebar.svelte"
    import DocsMenuItems from "./DocsMenuItems.svelte"

    export let isOpen = false
</script>

<Sidebar
    class="xl:w-56"
    id="docs-menu"
    bind:isOpen
    toggleButtonId="docs-menu-toggle"
    ariaLabel="Docs menu"
>
    <DocsMenuItems />
</Sidebar>
