<script lang="ts">
    import { onMount } from "svelte"
    import { page } from "$app/stores"
    import { browser } from "$app/environment"
    import Sidebar from "$lib/Sidebar/Sidebar.svelte"
    import SidebarTocItem from "$lib/Sidebar/SidebarTocItem.svelte"
    import { getTableOfContents } from "../../../../svelte-in-markdown/dist/getTableOfContents.js"

    export let isOpen: boolean
    export let name: string

    type TocItem = {
        id: string
        level: number
        textContent: string
    }

    let items: TocItem[] = []

    onMount(() => (items = getHeadings()))

    $: if (browser && $page.url.pathname) {
        items = getHeadings()
    }

    const getHeadings = () =>
        getTableOfContents({
            containerSelector: ".article-content",
            headingLevels: [2, 3, 4, 5, 6],
        })?.map(item => ({
            id: item.attributes.id ?? "",
            level: Number(item.level),
            textContent: item.textContent,
        })) satisfies TocItem[]
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
                    depthLvl={item.level}
                    on:click={() => (isOpen = false)}
                >
                    {@html item.textContent}
                </SidebarTocItem>
            </li>
        {/each}
    </ul>
</Sidebar>
