<script lang="ts">
    import { onMount } from "svelte"
    import { page } from "$app/stores"
    import { browser } from "$app/environment"
    import Sidebar from "$lib/Sidebar/Sidebar.svelte"
    import SidebarTocItem from "$lib/Sidebar/SidebarTocItem.svelte"

    export let isOpen: boolean
    export let name: string

    interface TocItem {
        id: string
        lvl: number
        value: string
    }

    let items: TocItem[] = []
    onMount(() => (items = getHeadings()))
    $: if (browser && $page.url.pathname) {
        items = getHeadings()
    }

    function getHeadings() {
        let items: TocItem[] = []

        const pageHeadings = document.querySelectorAll(
            ".article-content > h2, .article-content > h3, .article-content > h4, .article-content > h5, .article-content > h6",
        )

        pageHeadings?.forEach(h => {
            items.push({
                id: h.id!,
                lvl: Number(h.localName.slice(1)),
                value: h.textContent!,
            })
        })

        return items
    }
</script>

<Sidebar
    class="xl:w-auto xl:max-w-72"
    id="{name}-toc-menu"
    bind:isOpen
    toggleButtonId="{name}-toc-menu-toggle"
    ariaLabel="{name.charAt(0).toUpperCase() +
        name.slice(1)} (on this page) menu"
    hideScrollbar={true}
>
    <div class="whitespace-nowrap px-container-x font-bold xl:pr-0">
        ON THIS PAGE
    </div>

    <ul class="mt-4">
        {#each items as item}
            <li>
                <SidebarTocItem
                    href="#{item.id}"
                    depthLvl={item.lvl}
                    on:click={() => (isOpen = false)}
                >
                    {@html item.value}
                </SidebarTocItem>
            </li>
        {/each}
    </ul>
</Sidebar>
