<script lang="ts">
    export let title: string
</script>

<div class="relative rounded border-4 border-gray-50/5 bg-gray-50/5 p-4 sm:p-8">
    <div
        class="flex justify-center rounded-full bg-gray-700 px-container-x py-2 text-xs uppercase"
    >
        {title}
    </div>

    <div class="mt-4 space-y-4 text-sm sm:mt-8 sm:text-base">
        <slot />
    </div>
</div>
