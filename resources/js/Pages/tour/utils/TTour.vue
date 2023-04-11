<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    idItem: {
        type: Number,
        default: 0,
    },
});
</script>
<template>
    <img
        class="inline-block object-cover object-center rounded inline-flex border-8 border-sky-600"
        alt="hero"
        :src="item.image"
    />
</template>
