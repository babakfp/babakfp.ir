import { IconArticle, IconBookOpen, IconHome } from "$lib/components/icons"

export const isMainMenuOpen = $state({ value: false })

export const mainMenuItems = [
    { title: "HOME", href: "/", icon: IconHome },
    { title: "POSTS", href: "/posts", icon: IconArticle },
]
