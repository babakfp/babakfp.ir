<script lang="ts">
    import type { ClassValue } from "svelte/elements"
    import type { Headings } from "$lib/utilities/getHeadings"
    import IconCaretRightRegular from "phosphor-icons-svelte/IconCaretRightRegular.svelte"

    let {
        headings = [],
        class: class_,
    }: {
        headings: Headings
        class?: ClassValue
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
                    style="padding-left: calc(1rem * {heading.level});"
                >
                    {#if heading.level > 2}
                        <IconCaretRightRegular class="text-2xs text-gray-600" />
                    {/if}

                    <div class="line-clamp-1">
                        {heading.textContent}
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</nav>
