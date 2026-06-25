<script lang="ts">
    import type { ClassValue } from "svelte/elements"
    import type { Headings } from "$lib/utilities/getHeadings"
    import TocItem from "$lib/components/TocItem.svelte"

    let {
        headings,
        class: class_,
    }: {
        headings: Headings
        class?: ClassValue
    } = $props()
</script>

<nav
    class={[
        class_,
        "sticky top-(--header-height) max-h-(--svh-no-header) overflow-y-auto overscroll-y-contain pt-(--main-pt) pb-(--main-pb)",
    ]}
>
    <ul class="text-gray-300">
        {#each headings as heading}
            <li>
                <TocItem
                    {heading}
                    class={heading.level === 2 ?
                        "text-gray-400"
                    :   "text-gray-500"}
                />
            </li>
        {/each}
    </ul>
</nav>
