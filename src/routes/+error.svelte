<script lang="ts">
    import { page } from "$app/stores"
</script>

<svelte:head>
    <title>{$page.status}</title>
</svelte:head>

<main
    class="container grid min-h-(--svh-no-header) max-w-xs content-center gap-2 text-center"
>
    <h1 class="text-8xl font-bold text-gray-50">
        {$page.status}
    </h1>

    {#if $page.status === 404}
        <p class="text-balance">
            The page that you were looking for couldn't be found!
        </p>
    {:else if $page.error?.message}
        <p class="text-balance">{$page.error.message}</p>
    {/if}
</main>
