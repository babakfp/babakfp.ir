<script lang="ts">
    let windowScrollY: number
    let windowHeight: number
</script>

<svelte:window bind:scrollY={windowScrollY} bind:innerHeight={windowHeight} />

<a
    class="btn fixed bottom-0 right-4 z-30 translate-y-full duration-200 xl:right-8
	{windowScrollY >= windowHeight && '!-translate-y-4 xl:!-translate-y-8'}"
    href="#body"
>
    Return to top
</a>
