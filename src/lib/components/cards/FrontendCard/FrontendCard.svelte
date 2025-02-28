<script lang="ts">
    import FrontendCardTechItem from "$lib/components/cards/FrontendCard/FrontendCardTechItem.svelte"
    import PocketBaseOutline from "$lib/components/technology-logos/PocketBaseOutline.svelte"
    import Sass from "$lib/components/technology-logos/Sass.svelte"
    import Svelte from "$lib/components/technology-logos/Svelte.svelte"
    import TailwindCss from "$lib/components/technology-logos/TailwindCss.svelte"
    import TypeScript from "$lib/components/technology-logos/TypeScript.svelte"

    let {
        slug,
        title,
        description,
        poster,
        technologies,
        isSingleRow,
    }: {
        slug: string
        title: string
        description: string
        poster: string
        technologies: string[]
        isSingleRow?: boolean
    } = $props()
</script>

<li class={isSingleRow ? "lg:col-span-full" : ""}>
    <a
        class="group block outline-offset-8
			{isSingleRow && 'lg:grid lg:grid-cols-12 lg:gap-6'}
		"
        href="/portfolios/{slug}"
    >
        <div class="relative {isSingleRow && 'lg:col-start-1 lg:col-end-8'}">
            <div class="relative overflow-hidden">
                <img
                    class="aspect-16/9 w-full rounded-[2px] bg-gray-800 duration-700 ease-in-out group-hover:scale-95"
                    src={poster}
                    alt="Portfolio poster"
                    loading="lazy"
                />
                <div
                    class="hide group-hover:show absolute inset-0 aspect-16/9 h-full w-full -translate-y-8 scale-90 rounded-[2px] border-2 border-dashed border-gray-50/20 duration-1000 ease-in-out group-hover:translate-y-0 group-hover:scale-[.85] group-hover:rotate-1"
                ></div>
            </div>
            <div
                class="hide group-hover:show absolute inset-0 -z-1 aspect-16/9 h-full w-full rounded-[2px] bg-gray-50/10 duration-700 ease-in-out group-hover:-translate-y-4"
            ></div>
        </div>
        <div
            class="mt-4 grid content-center gap-2 {isSingleRow &&
                'lg:col-start-8 lg:col-end-13 lg:mt-0 lg:gap-4'}"
        >
            <div class="flex items-center justify-between">
                <h2
                    class="font-title text-3xl text-gray-50
                        {isSingleRow && 'lg:text-5xl'}"
                >
                    {title}
                </h2>
                <div
                    class="flex flex-row-reverse lg:opacity-0 lg:duration-1000 lg:group-hover:opacity-100"
                >
                    {#each technologies as technology}
                        {#if technology === "Sass"}
                            <FrontendCardTechItem
                                class="ring-offset-[#cd6799]"
                                title={technology}
                            >
                                <Sass />
                            </FrontendCardTechItem>
                        {/if}
                        {#if technology === "Svelte"}
                            <FrontendCardTechItem
                                class="ring-offset-[#ff3e00]"
                                title={technology}
                            >
                                <Svelte />
                            </FrontendCardTechItem>
                        {/if}
                        {#if technology === "Tailwind CSS"}
                            <FrontendCardTechItem
                                class="ring-offset-[#38bdf8]"
                                title={technology}
                            >
                                <TailwindCss />
                            </FrontendCardTechItem>
                        {/if}
                        {#if technology === "PocketBase"}
                            <FrontendCardTechItem
                                class="ring-offset-[#16161a]/75"
                                title={technology}
                            >
                                <PocketBaseOutline />
                            </FrontendCardTechItem>
                        {/if}
                        {#if technology === "TypeScript"}
                            <FrontendCardTechItem
                                class="ring-offset-[#3178c6]"
                                title={technology}
                            >
                                <TypeScript />
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
                    View website
                </span>
            {/if}
        </div>
    </a>
</li>
