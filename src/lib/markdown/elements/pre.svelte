<script lang="ts">
    import CopyButton from "../components/CopyButton.svelte"
    import Pre from "../components/Pre.svelte"

    let pre: HTMLPreElement
</script>

<Pre bind:pre {...$$restProps}><slot /><CopyButton {pre} /></Pre>
