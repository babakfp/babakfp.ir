<script lang="ts">
    import IconQuotesFill from "phosphor-icons-svelte/IconQuotesFill.svelte"
    import type { Snippet } from "svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<blockquote>
    <div class="pointer-events-none absolute top-1 right-1.5">
        <IconQuotesFill class="text-xl" />
    </div>

    <div>
        {@render children()}
    </div>
</blockquote>
