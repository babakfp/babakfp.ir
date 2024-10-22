<script lang="ts">
    import type { Snippet } from "svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<main
    class="container min-h-[--svh-no-header] max-w-screen-xl pb-[--main-pb] pt-[--main-pt]"
>
    {@render children()}
</main>
