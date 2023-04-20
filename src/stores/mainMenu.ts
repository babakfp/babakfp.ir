import { writable, readable } from "svelte/store"
import { IconHome, IconArticle, IconBookOpen } from "$icons"

export const isMainMenuOpen = writable(false)

export const mainMenuItems = readable([
	{ title: "HOME", href: "/", icon: IconHome },
	{ title: "BLOG", href: "/blog", icon: IconArticle },
	{ title: "DOCS", href: "/docs", icon: IconBookOpen },
])
