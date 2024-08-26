<script lang="ts">
    import { copyText } from "svelte-copy"

    let pre: HTMLPreElement

    let isDisabled = false

    const handleCopy = () => {
        if (isDisabled) return
        copyText(pre.innerText + "\n")
        isDisabled = true
        setTimeout(() => {
            isDisabled = false
        }, 1000)
    }
</script>

<pre bind:this={pre} {...$$restProps}><slot /></pre>

<button
    class="btn absolute -right-container top-0 rounded-none text-xs group-hover:opacity-100 sm:right-container sm:top-container sm:rounded sm:opacity-0"
    on:click={handleCopy}
    disabled={isDisabled}
    data-rehype-pretty-code-copy-button
>
    {isDisabled ? "Copied" : "Copy"}
</button>
