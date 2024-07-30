<script lang="ts">
    let windowScrollY: number
    let windowHeight: number
</script>

<svelte:window bind:scrollY={windowScrollY} bind:innerHeight={windowHeight} />

<a
    class="btn fixed bottom-0 right-container z-30 translate-y-full duration-200
	{windowScrollY >= windowHeight && '!-translate-y-container'}"
    href="#body"
>
    Return to top
</a>
