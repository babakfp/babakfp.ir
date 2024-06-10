<script lang="ts">
    import "$lib/app.pcss"
    import { LoadingBar } from "svelte-loading-bar"
    import Header from "$lib/header/Header.svelte"
</script>

<LoadingBar />

<Header />

<slot />
