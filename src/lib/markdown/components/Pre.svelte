<script lang="ts">
    export let pre: HTMLPreElement
</script>

<pre bind:this={pre} class="group relative" {...$$restProps}><slot /></pre>
