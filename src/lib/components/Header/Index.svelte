<script lang="ts">
    import DesktopMenu from "./DesktopMenu.svelte"
    import Logo from "./Logo.svelte"
    import LogoAnchor from "./LogoAnchor.svelte"
    import MobileMenu from "./MobileMenu.svelte"
    import MobileMenuToggle from "./MobileMenuToggle.svelte"
</script>

<header
    class="sticky top-0 z-50 h-[--header-height] border-b border-gray-800 bg-gray-900"
>
    <div class="container flex h-full max-w-screen-xl justify-between px-0">
        <LogoAnchor>
            <Logo />
        </LogoAnchor>

        <MobileMenuToggle />
        <DesktopMenu />
    </div>
</header>

<MobileMenu />
