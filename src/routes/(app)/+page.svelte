<script lang="ts">
    import { Toaster } from "svelte-french-toast"
    import HeroSection from "$lib/home/HeroSection.svelte"
</script>

<svelte:head>
    <title>Babak Farkhoopak</title>
    <meta
        name="description"
        content="Babak Farkhoopak website. Front-end Developer. JavaScript Developer. TypeScript Developer. TailwindCSS Developer. Full-stack Developer. PocketBase Developer."
    />
</svelte:head>

<HeroSection />

<ul
    class="mx-auto mt-8 grid max-w-prose gap-4 border-t border-white/5 pt-8 sm:grid-cols-2"
>
    <li>
        <a class="btn block p-6 text-center uppercase" href="/blog">Blog</a>
    </li>
    <li>
        <a class="btn block p-6 text-center uppercase" href="/docs">Docs</a>
    </li>
</ul>

<Toaster />
