<script lang="ts">
    import Sidebar from "$lib/components/Sidebar/Sidebar.svelte"
    import DocsMenuItems from "./DocsMenuItems.svelte"

    let {
        isOpen = $bindable(),
        class: class_,
    }: {
        isOpen?: boolean
        class?: string
    } = $props()
</script>

<Sidebar
    class="xl:min-w-56 xl:max-w-56 {class_}"
    id="docs-menu"
    bind:isOpen
    toggleButtonId="docs-menu-toggle"
    ariaLabel="Docs menu"
>
    <DocsMenuItems />
</Sidebar>
