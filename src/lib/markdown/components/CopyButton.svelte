<script lang="ts">
    import { copyText } from "svelte-copy"

    export let pre: HTMLPreElement

    let isDisabled = false

    const handleCopy = () => {
        if (isDisabled) return
        copyText(pre.querySelector("code")?.innerText + "\n")
        isDisabled = true
        setTimeout(() => {
            isDisabled = false
        }, 1000)
    }
</script>

<button
    class="btn absolute right-0 top-0 rounded-none text-xs opacity-0 group-[:hover]:opacity-100 sm:right-4 sm:top-4 sm:rounded"
    on:click={handleCopy}
    disabled={isDisabled}
    data-rehype-pretty-code-copy-button
>
    {isDisabled ? "Copied" : "Copy"}
</button>
