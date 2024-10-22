<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        class: class_,
        children,
    }: {
        class?: string
        children: Snippet
    } = $props()
</script>

<p class="{class_} text-xs leading-6 text-gray-400 sm:text-sm sm:leading-6">
    {@render children()}
</p>
