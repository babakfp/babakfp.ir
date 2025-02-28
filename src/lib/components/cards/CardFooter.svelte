<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<ul class="text-2xs mt-3 flex flex-wrap gap-x-4 gap-y-2 text-gray-500">
    {@render children()}
</ul>
