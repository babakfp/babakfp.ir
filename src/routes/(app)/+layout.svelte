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
