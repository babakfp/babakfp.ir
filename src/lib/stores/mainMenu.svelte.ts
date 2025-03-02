import { IconArticle, IconBookOpen, IconHome } from "$lib/components/icons"

export const isMainMenuOpen = $state({ value: false })

export const mainMenuItems = [
    { title: "Home", href: "/", icon: IconHome },
    { title: "Posts", href: "/posts", icon: IconArticle },
]
