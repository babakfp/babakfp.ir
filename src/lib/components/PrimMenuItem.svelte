<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        title,
        href,
        isExternal,
        class: class_,
        children,
    }: {
        title: string
        href: string
        isExternal?: boolean
        class?: string
        children: Snippet
    } = $props()
</script>

<a
    class="{class_} group outline-inset flex items-center gap-4 px-4 py-1 font-mono text-sm duration-100 hover:text-gray-50 xl:px-0"
    {href}
    target={isExternal ? "_blank" : null}
    rel={isExternal ? "noreferrer" : null}
>
    <div
        class="highlight-gray-50/10 flex h-7.5 w-7.5 items-center justify-center rounded bg-gray-50/5 text-gray-400 shadow-sm duration-100 group-hover:bg-gray-50/10 group-hover:text-gray-50"
    >
        {@render children()}
    </div>

    <span>{title}</span>
</a>
