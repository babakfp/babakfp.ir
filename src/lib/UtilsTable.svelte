<script lang="ts">
    import UtilsTableProperties from "$lib/UtilsTableProperties.svelte"

    export let utilities: object
    const theadItems = ["Class", "Properties"]
</script>

<div class="relative">
    <div class="table-wrapper overflow-x-auto">
        <table
            class="w-full border-collapse whitespace-nowrap text-left text-sm"
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

            <tbody
                class="select-text align-baseline font-mono selection:bg-gray-50/10"
            >
                {#each Object.entries(utilities) as [_class, selectorAndStyles]}
                    <tr
                        class="not-first-of-type:border-t-[0.1px] not-first-of-type:border-gray-50/5 xl:table-row"
                    >
                        <td style="color: #C4A7E7">
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

<!-- prettier-ignore -->
<style lang="postcss">
	thead th, tbody td { @apply p-0 }
	tbody tr { @apply m-0 }

	thead th:first-of-type div { @apply rounded-tl rounded-bl }
	thead th:last-of-type div { @apply rounded-tr rounded-br }

	thead th div, tbody td { @apply py-3 px-container }
	tbody tr:first-of-type td { @apply pt-4 }

	.table-wrapper::-webkit-scrollbar { @apply h-4 bg-gray-50/5 rounded-full;
		&-thumb { @apply border-[6px] }
	}
</style>
