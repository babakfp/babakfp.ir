<script lang="ts">
	import UtilsTableProperties from "$lib/UtilsTableProperties.svelte"

	export let utilities: object
	const theadItems = ["class", "properties"]
	export let className: string = ""
	export { className as class }

	const isCollapsable = Object.entries(utilities).length >= 8
	let isCollapsed = isCollapsable
</script>

<div class="relative -mx-2 xl:-mr-1">
	<div class="px-2 xl:max-h-96 xl:overflow-y-auto xl:pr-1 xl:scrollbar-y">
		<div class="table-wrapper overflow-x-auto pb-1">
			<table
				class="{className} w-full border-collapse whitespace-nowrap text-left font-mono text-sm"
			>
				<thead>
					<tr>
						{#each theadItems as title}
							<th>
								<div class="bg-gray-50/5">
									{title}
								</div>
							</th>
						{/each}
					</tr>
				</thead>

				<tbody class="align-baseline">
					{#each Object.entries(utilities) as [_class, selectorAndStyles], i}
						<tr
							class="
								not-first-of-type:border-t-[0.1px] not-first-of-type:border-gray-50/5
								{i + 1 >= 8 && isCollapsed && 'hidden'} xl:table-row
							"
						>
							<td
								class="select-text selection:bg-indigo-400/25"
								style="color: #C4A7E7"
							>
								{_class.replace(".", "")}
							</td>
							<td>
								{#if typeof selectorAndStyles === "string"}
									{@html selectorAndStyles}
								{:else}
									<UtilsTableProperties {selectorAndStyles} />
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- COLLAPSE STUFF -->
	{#if isCollapsable}
		<div
			class="
				!m-0
				{isCollapsed ? 'absolute bottom-0 pb-6' : 'sticky -bottom-2'}
				inset-x-0 flex items-center justify-center rounded bg-gray-800/50 p-4 backdrop-blur-[2px] xl:hidden
			"
		>
			<butttn
				class="relative cursor-pointer rounded-full bg-gray-800 px-6 py-2.5 text-xs duration-150 highlight-gray-50/10 hover:bg-gray-700"
				on:click={() => (isCollapsed = !isCollapsed)}
				on:keypress={() => (isCollapsed = !isCollapsed)}
			>
				{isCollapsed ? "Show all classes" : "Show fewer classes"}
			</butttn>
		</div>
	{/if}
</div>

<!-- prettier-ignore -->
<style lang="postcss">
	thead th, tbody td { @apply p-0 }
	tbody tr { @apply m-0 }

	thead th:first-of-type div { @apply rounded-tl rounded-bl }
	thead th:last-of-type div { @apply rounded-tr rounded-br }

	thead th div, tbody td { @apply py-3 px-4 }
	tbody tr:first-of-type td { @apply pt-4 }

	.table-wrapper::-webkit-scrollbar { @apply h-4 bg-gray-50/5 rounded-full;
		&-thumb { @apply border-[6px] }
	}
</style>
