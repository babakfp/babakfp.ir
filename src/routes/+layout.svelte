<script lang="ts">
    import "../app.postcss"
    import { LoadingBar } from "svelte-loading-bar"
    import Header from "$lib/header/Header.svelte"
</script>

<LoadingBar />

<Header />

<slot />
