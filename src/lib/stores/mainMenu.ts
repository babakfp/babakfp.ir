import { readable, writable } from "svelte/store"
import IconArticle from "$lib/icons/IconArticle.svelte"
import IconBookOpen from "$lib/icons/IconBookOpen.svelte"
import IconHome from "$lib/icons/IconHome.svelte"

export const isMainMenuOpen = writable(false)

export const mainMenuItems = readable([
    { title: "HOME", href: "/", icon: IconHome },
    { title: "BLOG", href: "/blog", icon: IconArticle },
    { title: "DOCS", href: "/docs", icon: IconBookOpen },
])
