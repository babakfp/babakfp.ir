<script lang="ts">
    import IconMinusRegular from "phosphor-icons-svelte/IconMinusRegular.svelte"
    import IconXRegular from "phosphor-icons-svelte/IconXRegular.svelte"
    import DrawerDown from "$lib/components/DrawerDown.svelte"
    import { focusTrap } from "$lib/utilities/focusTrap"
    import type { Headings } from "$lib/utilities/getHeadings"

    let {
        isOpen = $bindable(),
        headings = [],
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
                <a
                    class="outline-inset block text-gray-300 group-first:pt-6 group-last:pb-6 py-2 px-4 duration-100 hover:text-gray-50"
                    href="#{heading.id}"
                    onclick={() => (isOpen = false)}
                >
                    <div
                        class="flex items-center gap-2"
                        style:padding-left="calc(1.5rem * {heading.level - 2})"
                    >
                        <IconMinusRegular class="text-2xs opacity-20" />

                        <span class="line-clamp-1">
                            {heading.textContent}
                        </span>
                    </div>
                </a>
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
