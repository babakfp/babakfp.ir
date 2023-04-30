<script lang="ts">
	import { IconArrowUpRightSquare } from "$icons"

	export let src = ""
	export let alt = ""
</script>

<div class="group relative">
	<img {src} {alt} loading="lazy" />

	<a
		class="btn btn-icon absolute right-3 top-3 !mt-0 hide group-hover:show"
		href={src}
		target="_blank"
	>
		<IconArrowUpRightSquare />
	</a>
</div>
