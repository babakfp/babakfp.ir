<script lang="ts">
    export let selectorAndStyles: object
    export let indent = 16
</script>

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
                <svelte:self
                    selectorAndStyles={valueOrObjectOfPropertyAndValue}
                    indent={(indent += 16)}
                />
            </div>
            <span style="color: #908CAA">{"}"}</span>
        {/if}
    {/each}
</div>
