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
    type="button"
    class="btn btn-icon rounded-none text-xs sm:rounded-full"
    onclick={handleCopy}
    disabled={isDisabled}
    aria-label={isDisabled ? "Copied to clipboard" : "Copy to clipboard"}
>
    {#if isDisabled}
        <IconCheckRegular class="text-base" />
    {:else}
        <IconCopySimpleRegular class="text-base" />
    {/if}
</button>
