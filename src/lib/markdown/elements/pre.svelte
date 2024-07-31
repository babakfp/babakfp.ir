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

<div class="group relative">
    <pre bind:this={pre} {...$$restProps}><slot /></pre>

    <button
        class="btn absolute right-4 top-4 text-xs opacity-0 group-hover:opacity-100"
        on:click={handleCopy}
        disabled={isDisabled}
    >
        {isDisabled ? "Copied" : "Copy"}
    </button>
</div>
