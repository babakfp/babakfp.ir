<script lang="ts">
    import { copyText } from "svelte-copy"
    import IconCheckRegular from "phosphor-icons-svelte/IconCheckRegular.svelte"
    import IconCopySimpleRegular from "phosphor-icons-svelte/IconCopySimpleRegular.svelte"

    let {
        pre,
    }: {
        pre: HTMLPreElement | undefined
    } = $props()

    let isDisabled = $state(false)

    const handleCopy = async () => {
        if (!pre) return
        if (isDisabled) return
        await copyText(pre.querySelector("code")?.innerText + "\n")
        isDisabled = true
        setTimeout(() => {
            isDisabled = false
        }, 1000)
    }
</script>

<button
    class="btn btn-icon absolute top-0 -right-4 rounded-none text-xs opacity-0 group-focus-within:opacity-100 group-[:hover]:opacity-100 sm:top-4 sm:right-4 sm:rounded-lg"
    onclick={handleCopy}
    disabled={isDisabled}
    title={isDisabled ? "Copied" : "Copy"}
>
    {#if isDisabled}
        <IconCheckRegular class="text-lg" />
    {:else}
        <IconCopySimpleRegular class="text-lg" />
    {/if}
</button>
