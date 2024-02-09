<script lang="ts">
    import type { TechStack } from "./types"
    import TechGitHub from "$lib/tech/components/TechGitHub.svelte"
    import TechPocketBase from "$lib/tech/components/TechPocketBase.svelte"
    import TechSass from "$lib/tech/components/TechSass.svelte"
    import TechSvelte from "$lib/tech/components/TechSvelte.svelte"
    import TechTailwindCSS from "$lib/tech/components/TechTailwindCSS.svelte"
    import TechTypeScript from "$lib/tech/components/TechTypeScript.svelte"

    export let techNames: TechStack[]
    export let isSingleRow: boolean
</script>

<div
    class="absolute -right-4 top-1/2 grid -translate-y-1/2 -space-y-4 duration-1000 group-hover:opacity-0 sm:-space-y-2 lg:opacity-0 lg:group-hover:opacity-100 {isSingleRow
        ? 'lg:right-4 lg:group-hover:translate-x-6 lg:group-hover:rotate-1'
        : 'lg:-bottom-4 lg:right-2 lg:top-auto lg:flex lg:translate-y-0 lg:-space-x-2 lg:space-y-0 lg:duration-1000 lg:group-hover:translate-y-6'}"
>
    {#each techNames as tech}
        {#if tech === "GitHub"}
            <TechGitHub />
        {/if}
        {#if tech === "Sass"}
            <TechSass />
        {/if}
        {#if tech === "Svelte"}
            <TechSvelte />
        {/if}
        {#if tech === "TailwindCSS"}
            <TechTailwindCSS />
        {/if}
        {#if tech === "PocketBase"}
            <TechPocketBase />
        {/if}
        {#if tech === "TypeScript"}
            <TechTypeScript />
        {/if}
    {/each}
</div>
