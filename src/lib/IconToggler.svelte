<script lang="ts">
    export let isTrue = false
    export let className = ""
    export { className as class }
</script>

<div class="{className} flex">
    <div class="flex duration-100 {isTrue && 'scale-0'}">
        <slot name="first" />
    </div>

    <div class="absolute flex scale-0 duration-100 {isTrue && 'scale-100'}">
        <slot name="second" />
    </div>
</div>
