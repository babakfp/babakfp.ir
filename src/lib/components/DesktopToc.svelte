<script lang="ts">
    import type { Snippet } from "svelte"
    import type { MouseEventHandler } from "svelte/elements"
    import { IconChevronRight } from "$lib/components/icons"
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
        onclick?: MouseEventHandler<HTMLAnchorElement>
    } = $props()
</script>

<nav
    class={[
        class_,
        "sticky top-(--header-height) max-h-(--svh-no-header) max-w-72 min-w-72 overflow-y-auto overscroll-y-contain pt-(--main-pt) pb-(--main-pb)",
    ]}
>
    <ul class="text-gray-300">
        {#each headings as heading}
            <li>
                <a
                    class="outline-inset flex items-center gap-2 py-2 pr-4 text-gray-400 duration-100 hover:text-gray-50"
                    href="#{heading.id}"
                    {onclick}
                    style="padding-left: calc(1rem * {heading.level === 2 ?
                        2
                    :   heading.level});"
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
