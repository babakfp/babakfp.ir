<script lang="ts">
    import { Toaster } from "svelte-french-toast"
    import HeroSection from "$lib/components/home/HeroSection.svelte"
    import Footer from "$lib/Footer.svelte"
</script>

<svelte:head>
    <title>Babak Farkhoopak</title>
    <meta
        name="description"
        content="Babak Farkhoopak website. Front-end Developer. JavaScript Developer. TypeScript Developer. Tailwind CSS Developer. Full-stack Developer. PocketBase Developer."
    />
</svelte:head>

<div class="container max-w-screen-xl">
    <main
        class="grid min-h-[--svh-no-header] content-center border-x border-dashed border-gray-800 px-6 pb-[--main-pb] pt-[--main-pt] bg-grid-gray-800/25 [box-shadow:inset_0_0_4rem_2rem_theme(colors.gray.900)]"
    >
        <div class="relative">
            <div
                class="absolute z-0 size-1/2 bg-gray-900 inset-center [box-shadow:0_0_4rem_2rem_theme(colors.gray.900)]"
            />
            <HeroSection />
        </div>
    </main>
</div>

<Footer />

<Toaster />
