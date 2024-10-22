<script lang="ts">
    import type { Snippet } from "svelte"
    import type { TechStack } from "./types"

    let {
        title,
        class: class_,
        children,
    }: {
        title: TechStack
        class?: string
        children: Snippet
    } = $props()
</script>

<div
    class="flex rounded-full bg-gray-50 p-1.5 ring-2 ring-gray-50 ring-offset-2 {class_}"
    {title}
>
    {@render children()}
</div>
