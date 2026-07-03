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
    <div class="absolute top-1 right-1.5 pointer-events-none text-xl">
        <IconQuotesFill />
    </div>

    <div>
        {@render children()}
    </div>
</blockquote>
