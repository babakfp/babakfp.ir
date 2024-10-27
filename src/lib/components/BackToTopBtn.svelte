<script lang="ts">
    let windowScrollY = $state(0)
    let windowHeight = $state(0)
</script>

<svelte:window bind:scrollY={windowScrollY} bind:innerHeight={windowHeight} />

<a
    class="btn fixed bottom-0 right-4 z-30 translate-y-full duration-200
	{windowScrollY >= windowHeight && '!-translate-y-4'}"
    href="#body"
>
    Return to top
</a>
