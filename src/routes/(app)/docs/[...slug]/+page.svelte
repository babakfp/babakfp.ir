<script>
    import { getContext } from "svelte"

    export let data

    const title = getContext("title")
    $title = data.title
</script>

<svelte:component this={data.content} />
