<script lang="ts">
    import BackToTopBtn from "$lib/BackToTopBtn.svelte"
    import DocsMenu from "$lib/docs/DocsMenu.svelte"
    import Layout from "$lib/markdown/layouts/Layout.svelte"
    import TocMenu from "$lib/Sidebar/TocMenu.svelte"
    import { isDocsTocSidebarOpen } from "$lib/stores/docs"
</script>

<main class="main xl:py-0">
    <div
        class="mx-auto max-w-prose xl:grid xl:max-w-none xl:grid-cols-[auto_1fr_auto] xl:justify-center"
    >
        <DocsMenu />

        <Layout>
            <slot />
        </Layout>

        <TocMenu name="docs" bind:isOpen={$isDocsTocSidebarOpen} />
    </div>
</main>

<BackToTopBtn />
