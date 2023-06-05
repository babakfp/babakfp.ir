import { writable, readable } from "svelte/store"
import IconCode from "$icons/IconCode.svelte"
import IconGithub from "$icons/IconGithub.svelte"
import IconNpm from "$icons/IconNpm.svelte"

export const isDocsMenuSidebarOpen = writable(false)
export const isDocsTocSidebarOpen = writable(false)

export const docsSidebarItems = readable([
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
                title: "Getting Started",
                items: [
                    {
                        title: "Introduction",
                        path: "/docs/svelte-outclick",
                    },
                    {
                        title: "CHANGELOG",
                        path: "/docs/svelte-outclick/changelog",
                    },
                ],
            },
        ],
    },
    {
        name: "tailwindcss-addons",
        path: "/docs/tailwindcss-addons",
        primaryLinks: [
            {
                title: "GitHub",
                url: "https://github.com/babakfp/tailwindcss-addons",
                icon: IconGithub,
            },
            {
                title: "NPM",
                url: "https://www.npmjs.com/package/tailwindcss-addons",
                icon: IconNpm,
            },
        ],
        items: [
            {
                title: "Getting Started",
                items: [
                    {
                        title: "Introduction",
                        path: "/docs/tailwindcss-addons",
                    },
                    {
                        title: "CHANGELOG",
                        path: "/docs/tailwindcss-addons/changelog",
                    },
                ],
            },
            {
                title: "Presets",
                items: [
                    {
                        title: "Introduction",
                        path: "/docs/tailwindcss-addons/presets",
                    },
                ],
            },
            {
                title: "Utilities",
                items: [
                    {
                        title: "Direction",
                        path: "/docs/tailwindcss-addons/direction",
                    },
                    {
                        title: "User Drag",
                        path: "/docs/tailwindcss-addons/user-drag",
                    },
                    {
                        title: "Flip",
                        path: "/docs/tailwindcss-addons/flip",
                    },
                    {
                        title: "Hide & Show",
                        path: "/docs/tailwindcss-addons/hide-show",
                    },
                    {
                        title: "Input Resets",
                        path: "/docs/tailwindcss-addons/input-resets",
                    },
                    {
                        title: "Inset Center",
                        path: "/docs/tailwindcss-addons/inset",
                    },
                    {
                        title: "Overflow Unset",
                        path: "/docs/tailwindcss-addons/overflow",
                    },
                    {
                        title: "Tap Highlight",
                        path: "/docs/tailwindcss-addons/tap-highlight",
                    },
                    {
                        title: "Flex & Grid",
                        path: "/docs/tailwindcss-addons/flex-grid",
                    },
                    {
                        title: "Dynamic View Fix",
                        path: "/docs/tailwindcss-addons/dynamic-view-fix",
                    },
                    {
                        title: "Font Weight Regular",
                        path: "/docs/tailwindcss-addons/font-weight-regular",
                    },
                    {
                        title: "Background Grid",
                        path: "/docs/tailwindcss-addons/bg-grid",
                    },
                    {
                        title: "Background Radial",
                        path: "/docs/tailwindcss-addons/bg-radial",
                    },
                ],
            },
            {
                title: "Variants",
                items: [
                    {
                        title: "Not Variants",
                        path: "/docs/tailwindcss-addons/not-variants",
                    },
                ],
            },
        ],
    },
])
