import { writable, readable } from "svelte/store"
import IconHome from "$icons/IconHome.svelte"
import IconArticle from "$icons/IconArticle.svelte"
import IconBookOpen from "$icons/IconBookOpen.svelte"

export const isMainMenuOpen = writable(false)

export const mainMenuItems = readable([
    { title: "HOME", href: "/", icon: IconHome },
    { title: "BLOG", href: "/blog", icon: IconArticle },
    { title: "DOCS", href: "/docs", icon: IconBookOpen },
])
