<script lang="ts">
    import "$lib/app.css"
    import type { Snippet } from "svelte"
    import { Toaster } from "svelte-hot-french-toast"
    import { LoadingBar } from "svelte-loading-bar"
    import Header from "$lib/components/Header"
    import iconDarkDev from "$lib/static/icon-dark-dev.svg"
    import iconDark from "$lib/static/icon-dark.svg"
    import iconLightDev from "$lib/static/icon-light-dev.svg"
    import iconLight from "$lib/static/icon-light.svg"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<svelte:head>
    <link
        rel="icon"
        href={import.meta.env.DEV ? iconLightDev : iconLight}
        media="(prefers-color-scheme: dark)"
    />
    <link
        rel="icon"
        href={import.meta.env.DEV ? iconDarkDev : iconDark}
        media="(prefers-color-scheme: light)"
    />
</svelte:head>

<LoadingBar />

<Header />

{@render children()}

<Toaster />
