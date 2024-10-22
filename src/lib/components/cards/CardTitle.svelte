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

<h3 class="{class_} text-lg font-bold text-gray-50">
    {@render children()}
</h3>
