<script lang="ts">
	import { IconQuoteLeft } from "$icons"
</script>

<blockquote>
	<div
		class="absolute left-0 top-0 flex h-7 w-7 -translate-x-2 -translate-y-2 items-center justify-center rounded-full bg-gray-700 text-sm text-gray-500"
	>
		<IconQuoteLeft />
	</div>

	<slot />
</blockquote>
