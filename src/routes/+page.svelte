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
        class="grid min-h-(--svh-no-header) content-center px-6 pt-(--main-pt) pb-(--main-pb)"
    >
        <HeroSection />
    </main>
</div>
