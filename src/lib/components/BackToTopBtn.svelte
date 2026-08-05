<script lang="ts">
    import IconArrowLineUpRegular from "phosphor-icons-svelte/IconArrowLineUpRegular.svelte"
    import { innerHeight, scrollY } from "svelte/reactivity/window"

    const showButton = $derived(
        (scrollY.current ?? 0) >= (innerHeight.current ?? 0) * 2,
    )
</script>

<a
    class={[
        "btn btn-icon hide fixed right-4 bottom-32 z-30 size-12 translate-y-4 rounded-full transition-all duration-200",
        { "show! translate-y-0!": showButton },
    ]}
    href="#body"
    aria-label="Return to top"
>
    <IconArrowLineUpRegular class="text-xl" />
</a>
