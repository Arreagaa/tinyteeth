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
        class="object-cover object-center"
        alt="hero"
        :src="item.image"
    />
</template>
