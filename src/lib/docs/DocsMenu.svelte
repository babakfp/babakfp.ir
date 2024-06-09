<script lang="ts">
    import Sidebar from "$lib/Sidebar/Sidebar.svelte"
    import { isDocsMenuSidebarOpen } from "$lib/stores/docs"
    import DocsMenuItems from "./DocsMenuItems.svelte"
</script>

<Sidebar
    class="xl:w-56"
    id="docs-menu"
    bind:isOpen={$isDocsMenuSidebarOpen}
    toggleButtonId="docs-menu-toggle"
    ariaLabel="Docs menu"
>
    <DocsMenuItems />
</Sidebar>
