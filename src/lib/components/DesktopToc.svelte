<script lang="ts">
    import type { Snippet } from "svelte"
    import IconChevronRight from "$lib/icons/IconChevronRight.svelte"
    import type { Headings } from "$lib/utilities/getHeadings"

    let {
        headings = [],
        class: class_,
        children,
        onclick,
    }: {
        headings?: Headings
        class?: string
        children?: Snippet
        onclick?: (e: MouseEvent) => void
    } = $props()
</script>

<nav
    class="{class_} sticky top-[--header-height] max-h-[--svh-no-header] min-w-72 max-w-72 overflow-y-auto overscroll-y-contain pb-[--main-pb] pt-[--main-pt] [&::-webkit-scrollbar]:w-0"
>
    <ul class="text-gray-300">
        {#each headings as heading}
            <li>
                <a
                    class="flex items-center gap-2 py-2 pr-4 text-gray-400 duration-100 outline-inset hover:text-gray-50"
                    href="#{heading.id}"
                    {onclick}
                    style="padding-left: calc(1rem * {heading.level === 2
                        ? 2
                        : heading.level});"
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

    {@render children?.()}
</nav>
