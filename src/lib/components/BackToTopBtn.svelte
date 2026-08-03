<script lang="ts">
    import IconArrowURightUpRegular from "phosphor-icons-svelte/IconArrowURightUpRegular.svelte"
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
    <IconArrowURightUpRegular class="text-xl" />
</a>
