<script lang="ts">
    import type { Headings } from "$lib/utilities/getHeadings"
    import type { HTMLAnchorAttributes } from "svelte/elements"

    let {
        heading,
        ...rest
    }: {
        heading: Headings[number]
    } & HTMLAnchorAttributes = $props()
</script>

<a
    {...rest}
    class={[
        "outline-inset block gap-2 py-2 px-8 duration-100 hover:text-gray-50",
        rest.class,
    ]}
    href="#{heading.id}"
>
    <div
        class="flex items-center gap-2"
        style:padding-left="calc(var(--spacing) * 8 * {heading.level - 2})"
    >
        <span class="line-clamp-1">
            {heading.textContent}
        </span>
    </div>
</a>
