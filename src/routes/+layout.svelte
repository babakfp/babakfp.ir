<script lang="ts">
    import "$lib/app.css"
    import { LoadingBar } from "svelte-loading-bar"
    import Header from "$lib/components/Header/Index.svelte"
</script>

<LoadingBar />
<Header />
<slot />
