<script lang="ts">
    import { Toaster } from "svelte-hot-french-toast"
    import Footer from "$lib/components/Footer.svelte"
    import HeroSection from "$lib/components/home/HeroSection.svelte"
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
        class="grid min-h-[--svh-no-header] content-center border-x border-dashed border-gray-800 px-6 pb-[--main-pb] pt-[--main-pt] shadow-[inset_0_0_4rem_2rem_theme(colors.gray.900)] bg-grid-gray-800/25"
    >
        <div class="relative">
            <div
                class="absolute z-0 size-1/2 bg-gray-900 shadow-[0_0_4rem_2rem_theme(colors.gray.900)] inset-center"
            ></div>
            <HeroSection />
        </div>
    </main>
</div>

<Footer />

<Toaster />
