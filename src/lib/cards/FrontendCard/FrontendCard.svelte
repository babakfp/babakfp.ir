<script lang="ts">
    import type { TechStack } from "./types"
    import FrontendCardTechItem from "$lib/cards/FrontendCard/FrontendCardTechItem.svelte"
    import IconGithub from "$icons/IconGithub.svelte"
    import LogoPocketBase from "$lib/tech/logos/LogoPocketBase.svelte"
    import LogoSass from "$lib/tech/logos/LogoSass.svelte"
    import LogoSvelte from "$lib/tech/logos/LogoSvelte.svelte"
    import LogoTailwindCSS from "$lib/tech/logos/LogoTailwindCSS.svelte"
    import LogoTypeScript from "$lib/tech/logos/LogoTypeScript.svelte"

    export let slug: string
    export let title: string
    export let description: string
    export let poster: string
    export let techNames: TechStack[]
    export let isSingleRow = false
</script>

<li class={isSingleRow ? "lg:col-span-full" : ""}>
    <a
        class="group block outline-offset-8 tap-highlight-transparent
			{isSingleRow && 'lg:grid lg:grid-cols-12 lg:gap-6'}
		"
        href="/portfolios/{slug}"
    >
        <div class="relative {isSingleRow && 'lg:col-start-1 lg:col-end-8'}">
            <div class="relative overflow-hidden">
                <img
                    class="aspect-[16/9] w-full rounded-[2px] bg-gray-800 duration-700 ease-in-out group-hover:scale-95"
                    src={poster}
                    alt="Portfolio poster"
                    loading="lazy"
                />
                <div
                    class="absolute inset-0 aspect-[16/9] h-full w-full -translate-y-8 scale-90 rounded-[2px] border-2 border-dashed border-gray-50/20 duration-1000 ease-in-out hide group-hover:translate-y-0 group-hover:rotate-1 group-hover:scale-[.85] group-hover:show"
                />
            </div>
            <div
                class="absolute inset-0 -z-1 aspect-[16/9] h-full w-full rounded-[2px] bg-gray-50/10 duration-700 ease-in-out hide group-hover:-translate-y-4 group-hover:show"
            />
        </div>
        <div
            class="mt-4 grid content-center gap-2 {isSingleRow &&
                'lg:col-start-8 lg:col-end-13 lg:mt-0 lg:gap-4'}"
        >
            <div class="flex items-center justify-between">
                <h2
                    class="font-title text-4xl text-gray-50
                        {isSingleRow && 'lg:text-5xl'}"
                >
                    {title}
                </h2>
                <div class="flex flex-row-reverse text-[8px] sm:text-2xs">
                    {#each techNames as name, i}
                        {#if name === "GitHub"}
                            <FrontendCardTechItem
                                class="ring-offset-[#6e40c9]"
                                title={name}
                            >
                                <IconGithub class="text-[#6e40c9]" />
                            </FrontendCardTechItem>
                        {/if}
                        {#if name === "Sass"}
                            <FrontendCardTechItem
                                class="ring-offset-[#cd6799]"
                                title={name}
                            >
                                <LogoSass />
                            </FrontendCardTechItem>
                        {/if}
                        {#if name === "Svelte"}
                            <FrontendCardTechItem
                                class="ring-offset-[#ff3e00]"
                                title={name}
                            >
                                <LogoSvelte />
                            </FrontendCardTechItem>
                        {/if}
                        {#if name === "TailwindCSS"}
                            <FrontendCardTechItem
                                class="ring-offset-[#38bdf8]"
                                title={name}
                            >
                                <LogoTailwindCSS />
                            </FrontendCardTechItem>
                        {/if}
                        {#if name === "PocketBase"}
                            <FrontendCardTechItem
                                class="ring-offset-[#b8dbe4]"
                                title={name}
                            >
                                <LogoPocketBase />
                            </FrontendCardTechItem>
                        {/if}
                        {#if name === "TypeScript"}
                            <FrontendCardTechItem
                                class="ring-offset-[#3178c6]"
                                title={name}
                            >
                                <LogoTypeScript />
                            </FrontendCardTechItem>
                        {/if}
                    {/each}
                </div>
            </div>

            <p
                class="text-sm text-gray-400
				{isSingleRow && 'lg:text-lg'}"
            >
                {description}
            </p>
            {#if isSingleRow}
                <span class="hidden lg:inline-block lg:text-sm lg:underline">
                    View Website
                </span>
            {/if}
        </div>
    </a>
</li>
