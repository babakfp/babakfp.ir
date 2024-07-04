<script lang="ts">
    import { makeToc } from "mdx-svelte"
    import { onMount } from "svelte"
    import { browser } from "$app/environment"
    import { page } from "$app/stores"
    import Sidebar from "$lib/Sidebar/Sidebar.svelte"
    import SidebarTocItem from "$lib/Sidebar/SidebarTocItem.svelte"

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
        makeToc({
            container: ".article-content",
            headingLevels: [2, 3, 4, 5, 6],
        })?.map((heading) => ({
            id: heading.attributes.id ?? "",
            level: Number(heading.level),
            textContent: heading.textContent,
        })) satisfies Headings
</script>

{#if headings.length}
    <Sidebar
        class="xl:ml-container xl:w-auto xl:max-w-72"
        id="{name}-toc-menu"
        bind:isOpen
        toggleButtonId="{name}-toc-menu-toggle"
        ariaLabel="{name.charAt(0).toUpperCase() +
            name.slice(1)} (on this page) menu"
        hideScrollbar={true}
    >
        <div class="px-container whitespace-nowrap font-bold xl:pr-0">
            ON THIS PAGE
        </div>

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
    </Sidebar>
{/if}
