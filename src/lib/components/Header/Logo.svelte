<script lang="ts">
    import IconBracketsCurlyBold from "phosphor-icons-svelte/IconBracketsCurlyBold.svelte"
    import IconBracketsAngleBold from "phosphor-icons-svelte/IconBracketsAngleBold.svelte"
</script>

{#if import.meta.env.DEV}
    <IconBracketsAngleBold class="text-brand-200 text-3xl" />
{:else}
    <IconBracketsCurlyBold class="text-brand-200 text-3xl" />
{/if}
