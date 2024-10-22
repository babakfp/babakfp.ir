<script lang="ts">
    let {
        src,
        captions,
    }: {
        src: string
        captions: string
    } = $props()
</script>

<video controls>
    <source {src} type="video/mp4" />
    <track kind="captions" label={captions} />
</video>
