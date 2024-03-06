<script lang="ts">
    export let title: string
</script>

<section class="mx-auto mt-14 w-full max-w-prose">
    <h2 class="font-title text-4xl text-gray-50">
        {title}
    </h2>

    <ul class="mt-4 grid gap-4">
        <slot />
    </ul>
</section>
