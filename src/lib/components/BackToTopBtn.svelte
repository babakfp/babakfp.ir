<script lang="ts">
    let windowScrollY = $state(0)
    let windowHeight = $state(0)
</script>

<svelte:window bind:scrollY={windowScrollY} bind:innerHeight={windowHeight} />

<a
    class={[
        "btn fixed right-4 bottom-0 z-30 translate-y-full duration-200",
        { "-translate-y-4!": windowScrollY >= windowHeight },
    ]}
    href="#body"
>
    Return to top
</a>
