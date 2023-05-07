<script lang="ts">
    export let title: string
    export let description: string
    export let poster: string
    export let url: string
    export let isSingleRow: boolean | undefined = false
</script>

<a
    class="
		group block outline-offset-8 tap-highlight-transparent
		{isSingleRow && 'lg:col-span-full lg:grid lg:grid-cols-12 lg:gap-6'}
	"
    href={url}
    target="_blank"
    rel="noreferrer"
>
    <div class="relative {isSingleRow && 'lg:col-start-1 lg:col-end-8'}">
        <img
            class="
				aspect-[16/9] w-full rounded-[2px] bg-gray-800 duration-200 group-hover:scale-95
				{isSingleRow &&
                'shadow-[0_0_4px_0_rgb(255_255_255/5%),0_0_16px_0_rgb(255_255_255/10%)]'}
			"
            src={poster}
            alt="Portfolio poster"
        />
        <div
            class="absolute inset-0 -z-1 aspect-[16/9] h-full w-full rounded-[2px] bg-gray-50/10 duration-200 hide group-hover:-translate-y-4 group-hover:show"
        />
        <div
            class="absolute inset-0 aspect-[16/9] h-full w-full -translate-y-8 scale-90 rounded-[2px] border-2 border-dashed border-gray-50/20 duration-500 hide group-hover:translate-y-0 group-hover:rotate-1 group-hover:scale-[.85] group-hover:show"
        />
    </div>
    <div
        class="
			mt-4 grid content-center gap-2
			{isSingleRow && 'lg:col-start-8 lg:col-end-13 lg:mt-0 lg:gap-4'}
		"
    >
        <h2
            class="text-xl font-bold text-gray-50
				{isSingleRow && 'lg:!text-3xl'}"
        >
            {title}
        </h2>
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
