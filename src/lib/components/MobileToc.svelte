<script lang="ts">
    import DrawerDown from "$lib/components/DrawerDown.svelte"
    import { IconChevronRight, IconX } from "$lib/components/icons"
    import { focusTrap } from "$lib/utilities/focusTrap"
    import type { Headings } from "$lib/utilities/getHeadings"

    let {
        isOpen = $bindable(),
        headings = [],
        excluderQuery,
    }: {
        isOpen?: boolean
        headings?: Headings
        excluderQuery: string
    } = $props()
</script>

<DrawerDown class="xl:hidden" bind:isOpen {excluderQuery}>
    <ul class="pt-4 pb-8 text-gray-300" use:focusTrap>
        {#each headings as heading}
            <li class="group">
                <a
                    class="outline-inset flex items-center gap-2 py-2 pr-4 duration-100 hover:text-gray-50"
                    href="#{heading.id}"
                    onclick={() => (isOpen = false)}
                    style="padding-left: calc(1rem * {heading.level - 1});"
                >
                    {#if heading.level > 2}
                        <IconChevronRight class="text-2xs text-gray-600" />
                    {/if}

                    <div class="line-clamp-1">
                        {heading.textContent}
                    </div>
                </a>
            </li>
        {/each}
    </ul>

    <button
        class="btn fixed right-4 bottom-16"
        onclick={() => (isOpen = false)}
    >
        <IconX class="text-xl" />
    </button>
</DrawerDown>
