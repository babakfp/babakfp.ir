<script lang="ts">
    import { page } from "$app/stores"
    import { isDocsMenuSidebarOpen } from "$stores/docs"
    import { IconList, IconX } from "$icons"
    import IconToggler from "$lib/IconToggler.svelte"
</script>

{#if $page.url.pathname.startsWith("/docs") && $page.url.pathname !== "/docs"}
    <button
        id="docs-menu-toggle"
        class="header-btn px-2 xl:!hidden"
        on:click={() => ($isDocsMenuSidebarOpen = !$isDocsMenuSidebarOpen)}
        aria-label="{$isDocsMenuSidebarOpen ? 'Close' : 'Open'} docs menu"
        aria-controls="docs-menu"
        aria-expanded={$isDocsMenuSidebarOpen}
    >
        <IconToggler class="text-2xl" isTrue={$isDocsMenuSidebarOpen}>
            <svelte:fragment slot="first">
                <IconList />
            </svelte:fragment>
            <svelte:fragment slot="second">
                <IconX />
            </svelte:fragment>
        </IconToggler>
    </button>
{/if}
