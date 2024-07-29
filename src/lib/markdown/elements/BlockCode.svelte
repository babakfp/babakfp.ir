<script lang="ts">
    import { copyText } from "svelte-copy"

    let code: HTMLElement

    let isDisabled = false

    const handleCopy = () => {
        if (isDisabled) return
        copyText(code.innerText + "\n")
        isDisabled = true
        setTimeout(() => {
            isDisabled = false
        }, 1000)
    }
</script>

<code bind:this={code} {...$$restProps}>
    <slot />
</code>

<button
    class="block-code-copy btn absolute right-4 top-4 text-xs opacity-0 group-hover:opacity-100"
    on:click={handleCopy}
    disabled={isDisabled}
>
    {isDisabled ? "Copied" : "Copy"}
</button>
