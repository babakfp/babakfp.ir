import { readable, writable } from "svelte/store"
import { IconArticle, IconBookOpen, IconHome } from "$lib/components/icons"

export const isMainMenuOpen = writable(false)

export const mainMenuItems = readable([
    { title: "HOME", href: "/", icon: IconHome },
    { title: "DOCS", href: "/docs", icon: IconBookOpen },
    { title: "POSTS", href: "/posts", icon: IconArticle },
])
