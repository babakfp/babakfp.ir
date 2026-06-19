<script module lang="ts">
    // 1. Create a unique key for the nesting context
    const NESTING_KEY = "nesting-index" // Symbol("nesting-index")
</script>

<script lang="ts">
    import type { Snippet } from "svelte"
    import { getContext, setContext } from "svelte"
    import IconQuotesFill from "phosphor-icons-svelte/IconQuotesFill.svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()

    // 2. Look for a parent's index. If none exists, start at -1.
    const parentIndex = getContext<number | undefined>(NESTING_KEY) ?? -1

    // 3. Increment the index for the current instance (First instance = 0)
    const index = parentIndex + 1

    // 4. Share this instance's index with any deeply nested children
    setContext(NESTING_KEY, index)
</script>

<blockquote
    style:--tw-ring-color={`oklch(from var(--color-orange-400) l c calc(h + ${index} * 70) / 10%)`}
    style:background-color={`oklch(from var(--color-orange-400) l c calc(h + ${index} * 70) / 5%)`}
>
    <div
        class="absolute top-1 right-1.5 pointer-events-none text-xl"
        style:color={`oklch(from var(--color-orange-400) l c calc(h + ${index} * 70) / 25%)`}
    >
        <IconQuotesFill />
    </div>

    <div>
        {@render children()}
    </div>
</blockquote>
