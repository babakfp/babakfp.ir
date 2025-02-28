<script lang="ts">
    import { copyText } from "svelte-copy"

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
    class="btn absolute top-0 right-0 rounded-none text-xs opacity-0 group-focus-within:opacity-100 group-[:hover]:opacity-100 sm:top-4 sm:right-4 sm:rounded"
    onclick={handleCopy}
    disabled={isDisabled}
    data-rehype-pretty-code-copy-button
>
    {isDisabled ? "Copied" : "Copy"}
</button>
