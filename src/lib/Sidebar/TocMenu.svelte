<script lang="ts">
    import { onMount } from "svelte"
    import { page } from "$app/stores"
    import { browser } from "$app/environment"
    import Sidebar from "$lib/Sidebar/Sidebar.svelte"
    import SidebarTocItem from "$lib/Sidebar/SidebarTocItem.svelte"
    import { getTableOfContents } from "svelte-in-markdown"

    export let isOpen: boolean
    export let name: string

    type Headings = {
        id: string
        level: number
        textContent: string
    }[]

    let headings: Headings = []

    onMount(() => {
        headings = getHeadings()
    })

    $: if (browser && $page.url.pathname) {
        headings = getHeadings()
    }

    const getHeadings = () =>
        getTableOfContents({
            containerSelector: ".article-content",
            headingLevels: [2, 3, 4, 5, 6],
        })?.map(heading => ({
            id: heading.attributes.id ?? "",
            level: Number(heading.level),
            textContent: heading.textContent,
        })) satisfies Headings
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

    {#if headings.length}
        <ul class="mt-4">
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
    {:else}
        <p>No headings found!</p>
    {/if}
</Sidebar>
