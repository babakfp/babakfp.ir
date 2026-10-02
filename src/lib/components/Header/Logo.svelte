<script lang="ts">
    import IconBracketsAngleBold from "phosphor-icons-svelte/IconBracketsAngleBold.svelte"
    import IconBracketsCurlyBold from "phosphor-icons-svelte/IconBracketsCurlyBold.svelte"
</script>

{#if import.meta.env.DEV}
    <IconBracketsAngleBold class="text-brand-200 text-3xl" />
{:else}
    <IconBracketsCurlyBold class="text-brand-200 text-3xl" />
{/if}
