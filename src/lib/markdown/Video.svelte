<script lang="ts">
    export let src: string
    export let captions: string
</script>

<video controls>
    <source {src} type="video/mp4" />
    <track kind="captions" label={captions} />
</video>
