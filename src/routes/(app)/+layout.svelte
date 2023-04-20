<script lang="ts">
	import { fly } from "svelte/transition"
	import { page } from "$app/stores"
	import layoutTransition from "$utils/layoutTransition"
</script>

{#key $page.url.pathname}
	<main class="main" in:fly={layoutTransition}>
		<slot />
	</main>
{/key}
