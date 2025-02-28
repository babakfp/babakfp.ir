<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<main
    class="container min-h-(--svh-no-header) max-w-(--breakpoint-xl) pt-(--main-pt) pb-(--main-pb)"
>
    {@render children()}
</main>
