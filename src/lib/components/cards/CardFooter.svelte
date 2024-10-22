<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<ul class="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-2xs text-gray-500">
    {@render children()}
</ul>
