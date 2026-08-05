<script lang="ts">
    import IconListRegular from "phosphor-icons-svelte/IconListRegular.svelte"
    import IconXRegular from "phosphor-icons-svelte/IconXRegular.svelte"
    import DrawerDown from "$lib/components/DrawerDown.svelte"
    import TocItem from "$lib/components/TocItem.svelte"
    import { focusTrap } from "$lib/utilities/focusTrap"
    import type { Headings } from "$lib/utilities/getHeadings"

    let {
        headings,
        excluderQuery,
    }: {
        headings: Headings
        excluderQuery: string
    } = $props()

    let isOpen = $state(false)
</script>

<button
    type="button"
    id="open-mobile-toc"
    class="btn btn-icon fixed right-4 bottom-18 size-12 rounded-full xl:hidden!"
    onclick={() => (isOpen = true)}
>
    <IconListRegular class="text-xl" />
</button>

<DrawerDown class="xl:hidden" bind:isOpen {excluderQuery}>
    <ul class="pb-17" use:focusTrap>
        {#each headings as heading}
            <li class="group">
                <TocItem
                    {heading}
                    class={[
                        "px-4 group-first:pt-6 group-last:pb-6",
                        heading.level === 2 ? "text-gray-300" : "text-gray-400",
                    ]}
                    onclick={() => (isOpen = false)}
                />
            </li>
        {/each}
    </ul>

    <button
        type="button"
        class="btn btn-icon fixed right-4 bottom-18 size-12 rounded-full"
        onclick={() => (isOpen = false)}
    >
        <IconXRegular class="text-xl" />
    </button>
</DrawerDown>
