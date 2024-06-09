<script lang="ts">
    import IconArrowUpRightSquare from "$lib/icons/IconArrowUpRightSquare.svelte"

    export let src = ""
    export let alt = ""
</script>

<div class="group relative inline-block">
    <img class="inline" {src} {alt} loading="lazy" />

    <a
        class="btn btn-icon absolute right-3 top-3 hide group-hover:show"
        href={src}
        target="_blank"
    >
        <IconArrowUpRightSquare />
    </a>
</div>
