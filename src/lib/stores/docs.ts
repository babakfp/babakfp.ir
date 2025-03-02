import { IconCode, IconGithub, IconNpm } from "$lib/components/icons"

export const docsSidebarItems = [
    {
        name: "svelte-outclick",
        path: "/docs/svelte-outclick",
        primaryLinks: [
            {
                title: "Demo",
                url: "https://svelte-outclick.vercel.app",
                icon: IconCode,
            },
            {
                title: "GitHub",
                url: "https://github.com/babakfp/svelte-outclick",
                icon: IconGithub,
            },
            {
                title: "NPM",
                url: "https://www.npmjs.com/package/svelte-outclick",
                icon: IconNpm,
            },
        ],
        items: [
            {
                title: "Get Started",
                items: [
                    {
                        title: "Intro",
                        path: "/docs/svelte-outclick",
                    },
                ],
            },
            {
                title: "CHANGELOG",
                path: "/docs/svelte-outclick/changelog",
            },
        ],
    },
]
