<script lang="ts">
    import "../app.postcss"
    import { LoadingBar } from "svelte-loading-bar"
    import Header from "$lib/header/Header.svelte"
    import { onMount } from "svelte"
    import { removeHoverOnTouch } from "$utils/removeHoverOnTouch"

    onMount(() => removeHoverOnTouch())
</script>

<LoadingBar />

<Header />

<slot />
