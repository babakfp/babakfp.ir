<script lang="ts">
    import { IconArrowUpRightSquare } from "$lib/components/icons"

    let {
        src,
        alt,
    }: {
        src?: string
        alt?: string
    } = $props()
</script>

<div class="group relative inline-block">
    <img class="inline" {src} {alt} loading="lazy" />

    <a
        class="hide group-hover:show btn btn-icon absolute top-3 right-3"
        href={src}
        target="_blank"
    >
        <IconArrowUpRightSquare />
    </a>
</div>
