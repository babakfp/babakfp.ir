<script lang="ts">
    let {
        src,
        label,
    }: {
        src: string
        label: string
    } = $props()
</script>

<video
    controls
    controlslist="nodownload noplaybackrate noremoteplayback"
    disablepictureinpicture
    disableremoteplayback
    title={label}
>
    <source {src} type="video/mp4" />
</video>
