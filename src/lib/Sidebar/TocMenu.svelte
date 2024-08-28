<script lang="ts">
    import { onMount } from "svelte"
    import { browser } from "$app/environment"
    import { page } from "$app/stores"
    import Sidebar from "$lib/Sidebar/Sidebar.svelte"
    import SidebarTocItem from "$lib/Sidebar/SidebarTocItem.svelte"
    import { getHeadings, type Headings } from "$lib/utilities/getHeadings"

    export let isOpen: boolean
    export let name: string

    let headings: Headings = []

    onMount(() => {
        headings = getHeadings()
    })

    $: if (browser && $page.url.pathname) {
        headings = getHeadings()
    }
</script>

{#if headings.length}
    <Sidebar
        class="xl:w-auto xl:max-w-72"
        id="{name}-toc-menu"
        bind:isOpen
        toggleButtonId="{name}-toc-menu-toggle"
        ariaLabel="{name.charAt(0).toUpperCase() +
            name.slice(1)} (on this page) menu"
        hideScrollbar={true}
    >
        <ul>
            {#each headings as heading}
                <li>
                    <SidebarTocItem
                        href="#{heading.id}"
                        depthLvl={heading.level}
                        on:click={() => (isOpen = false)}
                    >
                        {heading.textContent}
                    </SidebarTocItem>
                </li>
            {/each}
        </ul>
    </Sidebar>
{/if}
