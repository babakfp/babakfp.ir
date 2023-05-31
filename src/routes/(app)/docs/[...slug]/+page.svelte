<script>
    import { doc } from "./stores"

    export let data

    $doc = { title: data.title }
</script>

<svelte:component this={data.content} />
