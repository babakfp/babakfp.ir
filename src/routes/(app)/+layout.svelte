<script lang="ts">
    import { fly } from "svelte/transition"
    import { page } from "$app/stores"
    import transition from "$lib/utils/transition"
</script>

{#key $page.url.pathname}
    <main class="main" in:fly={transition}>
        <slot />
    </main>
{/key}

<div class="border-t border-gray-800 py-4 text-center">
    <p class="text-sm">
        Favicon by
        <a class="link" href="https://icons8.com" target="_blank">Icon8</a>.
    </p>
</div>
