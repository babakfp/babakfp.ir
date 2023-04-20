<script lang="ts">
	export let title: string
</script>

<div class="relative rounded border-4 border-gray-50/5 bg-gray-50/5 p-4 sm:p-8">
	<div
		class="flex justify-center rounded-full bg-gray-700 py-2 px-4 text-xs uppercase sm:-m-4 sm:mb-8"
	>
		{title}
	</div>

	<div class="text-sm sm:text-base">
		<slot />
	</div>
</div>
