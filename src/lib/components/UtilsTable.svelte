<script lang="ts">
    let {
        utilities,
    }: {
        utilities: object
    } = $props()

    const theadItems = ["Class", "Styles"]
</script>

<div class="relative">
    <div class="overflow-x-auto">
        <table
            class="w-full border-collapse text-left text-sm whitespace-nowrap"
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
                class="align-baseline font-mono select-text selection:bg-gray-50/10"
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
                                {@render Properties({ selectorAndStyles })}
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

{#snippet Properties({
    selectorAndStyles,
    indent = $bindable(16),
}: {
    selectorAndStyles: object
    indent?: number
})}
    <div class="leading-6">
        {#each Object.entries(selectorAndStyles) as [propertyOrSelector, valueOrObjectOfPropertyAndValue]}
            <!-- For @apply -->
            {#if propertyOrSelector.includes("@apply")}
                <span style="color: #908CAA">{"@apply"}</span>
                <span style="color: #9CCFD8">
                    {propertyOrSelector.replace("@apply", "").trim()}<span
                        style="color: #908CAA">{";"}</span
                    >
                </span>
            {:else if valueOrObjectOfPropertyAndValue === ""}
                <!-- For variants -->
                <!-- selector -->
                <div>{propertyOrSelector}</div>
            {:else if typeof valueOrObjectOfPropertyAndValue === "string"}
                <!-- property: value -->
                <div>
                    <!-- prettier-ignore -->
                    <span style="color: #9CCFD8">{propertyOrSelector}<span style="color: #908CAA">:</span></span>
                    <!-- prettier-ignore -->
                    <span style="color: {Number.isNaN(valueOrObjectOfPropertyAndValue) ? '#F6C177' : '#EA9A97'}">{valueOrObjectOfPropertyAndValue}<span style="color: #908CAA">;</span></span>
                </div>
            {:else if typeof valueOrObjectOfPropertyAndValue === "object"}
                <!-- {} -->
                <!-- Spliting every selector into a new line
		Used span to keep selector and { in the same line -->
                {@const selectors = propertyOrSelector.split(",")}
                {#each selectors as selector, i}
                    {@const isNotTheLastSelector = i < selectors.length - 1}
                    <svelte:element
                        this={isNotTheLastSelector ? "div" : "span"}
                        style="color: #908CAA"
                    >
                        {selector}{isNotTheLastSelector ? "," : ""}
                    </svelte:element>
                {/each}
                <span style="color: #908CAA">{"{"}</span>
                <div style="text-indent: {indent}px">
                    {@render Properties({
                        selectorAndStyles: valueOrObjectOfPropertyAndValue,
                        indent: indent + 16,
                    })}
                </div>
                <span style="color: #908CAA">{"}"}</span>
            {/if}
        {/each}
    </div>
{/snippet}

<!-- TODO -->
<!-- prettier-ignore -->
<style>
    @reference "../../app.css";

	thead th, tbody td { @apply p-0 }
	tbody tr { @apply m-0 }

	thead th:first-of-type div { @apply rounded-tl rounded-bl }
	thead th:last-of-type div { @apply rounded-tr rounded-br }

	thead th div, tbody td { @apply py-3 px-4 }
	tbody tr:first-of-type td { @apply pt-4 }
</style>
