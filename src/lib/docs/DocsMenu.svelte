<script lang="ts">
	import { isDocsMenuSidebarOpen } from "$stores/docs"
	import Sidebar from "$lib/Sidebar/Sidebar.svelte"
	import DocsMenuItems from "./DocsMenuItems.svelte"
</script>

<Sidebar
	class="sm:w-56"
	id="docs-menu"
	bind:isOpen={$isDocsMenuSidebarOpen}
	toggleButtonId="docs-menu-toggle"
	ariaLabel="Docs menu"
>
	<DocsMenuItems />
</Sidebar>
