<script lang="ts">
    import { page } from "$app/stores"
</script>

<svelte:head>
    <title>{$page.status}</title>
</svelte:head>

<div
    class="mx-auto grid min-h-[--screen-h-minus-header-h] max-w-xs content-center text-center"
>
    <h1 class="mb-2 text-8xl font-bold text-gray-50">
        {$page.status}
    </h1>

    {#if $page.status === 404}
        <p>The page that you were looking for couldn't be found!</p>
        <a class="btn mx-auto mt-4" href="/">Home page</a>
    {:else if $page.error?.message}
        <p>{$page.error.message}</p>
    {/if}
</div>
