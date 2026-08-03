<script lang="ts">
    import IconArrowLineUpRegular from "phosphor-icons-svelte/IconArrowLineUpRegular.svelte"
    import { innerHeight, scrollY } from "svelte/reactivity/window"
</script>

<a
    class={[
        "btn fixed right-4 bottom-0 z-30 translate-y-full duration-200",
        { "-translate-y-4!": scrollY >= innerHeight },
    ]}
    href="#body"
    aria-label="Return to top"
>
    <IconArrowLineUpRegular class="text-xl" />
</a>
