<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        title,
        children,
    }: {
        title: string
        children: Snippet
    } = $props()
</script>

<div class="flex rounded bg-gray-800 p-4 text-3xl" {title}>
    {@render children()}
</div>
