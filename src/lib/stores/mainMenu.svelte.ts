import IconArticleNyTimesFill from "phosphor-icons-svelte/IconArticleNyTimesFill.svelte"
import IconHouseFill from "phosphor-icons-svelte/IconHouseFill.svelte"

export const isMainMenuOpen = $state({ value: false })

export const mainMenuItems = [
    { title: "Home", href: "/", icon: IconHouseFill },
    { title: "Posts", href: "/posts", icon: IconArticleNyTimesFill },
]
