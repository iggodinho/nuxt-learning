<template>
    <div class="t-3x1 font-black text-shadow-2sx" :class="props.colorClass">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
    interface PageTitleProperties{
        colorClass: string;
    }

    const props=withDefaults(defineProps<PageTitleProperties>(),{
        colorClass: 'text-gray-500'
    });
</script>   