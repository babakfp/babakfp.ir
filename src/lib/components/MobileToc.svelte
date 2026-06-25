<script lang="ts">
    import IconXRegular from "phosphor-icons-svelte/IconXRegular.svelte"
    import DrawerDown from "$lib/components/DrawerDown.svelte"
    import { focusTrap } from "$lib/utilities/focusTrap"
    import type { Headings } from "$lib/utilities/getHeadings"
    import TocItem from "$lib/components/TocItem.svelte"

    let {
        isOpen = $bindable(),
        headings,
        excluderQuery,
    }: {
        isOpen?: boolean
        headings: Headings
        excluderQuery: string
    } = $props()
</script>

<DrawerDown class="xl:hidden" bind:isOpen {excluderQuery}>
    <ul class="pb-26" use:focusTrap>
        {#each headings as heading}
            <li class="group">
                <TocItem
                    {heading}
                    class={[
                        "group-first:pt-6 group-last:pb-6 px-4",
                        heading.level === 2 ? "text-gray-300" : "text-gray-400",
                    ]}
                    onclick={() => (isOpen = false)}
                />
            </li>
        {/each}
    </ul>

    <button
        class="btn fixed right-4 bottom-16"
        onclick={() => (isOpen = false)}
    >
        <IconXRegular class="text-xl" />
    </button>
</DrawerDown>
