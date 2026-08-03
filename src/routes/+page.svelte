<script lang="ts">
    import HeroSection from "$lib/components/home/HeroSection.svelte"
</script>

<svelte:head>
    <title>Babak Farkhoopak</title>
    <meta
        name="description"
        content="Babak Farkhoopak website. Front-end Developer. JavaScript Developer. TypeScript Developer. Tailwind CSS Developer. Full-stack Developer. PocketBase Developer."
    />
</svelte:head>

<div class="container max-w-(--breakpoint-xl)">
    <main
        class="bg-grid-gray-900 grid min-h-(--svh-no-header) content-center border-x border-gray-900 px-6 pt-(--main-pt) pb-(--main-pb) shadow-[inset_0_0_4rem_2rem_var(--color-background)]"
    >
        <div class="relative">
            <div
                class="inset-center absolute z-0 size-1/2 bg-background shadow-[0_0_4rem_2rem_var(--color-background)]"
            ></div>
            <HeroSection />
        </div>
    </main>
</div>
