<script lang="ts">
	import { page } from "$app/stores"
	import { onMount } from "svelte"
	import { browser } from "$app/environment"
	import { getHeadings } from "$utils/toc"
	import Sidebar from "$lib/Sidebar/Sidebar.svelte"
	import SidebarTocItem from "$lib/Sidebar/SidebarTocItem.svelte"

	export let isOpen: boolean
	export let name: string

	let contents: Element[] = []
	onMount(() => (contents = getHeadings()))
	$: if (browser && $page.url.pathname) {
		contents = getHeadings()
	}
</script>

<Sidebar
	id="{name}-toc-menu"
	bind:isOpen
	toggleButtonId="{name}-toc-menu-toggle"
	ariaLabel="{name.charAt(0).toUpperCase() +
		name.slice(1)} (on this page) menu"
>
	<div class="px-4 text-xl font-bold">ON THIS PAGE</div>

	<ul class="mt-4">
		{#each contents as content}
			{@const depthLvl = Number(content.localName.slice(1))}
			<li on:click={() => (isOpen = false)}>
				<SidebarTocItem href="#{content.id}" {depthLvl}>
					{@html content.innerHTML}
				</SidebarTocItem>
			</li>
		{/each}
	</ul>
</Sidebar>
