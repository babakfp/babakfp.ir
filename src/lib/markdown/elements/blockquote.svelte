<script lang="ts">
    import type { Snippet } from "svelte"
    import IconQuoteLeft from "$lib/components/icons/IconQuoteLeft.svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<blockquote>
    <div class="absolute left-0 top-0 pl-1.5 text-sm text-gray-600">
        <IconQuoteLeft />
    </div>

    <div class="mt-2">
        {@render children()}
    </div>
</blockquote>
