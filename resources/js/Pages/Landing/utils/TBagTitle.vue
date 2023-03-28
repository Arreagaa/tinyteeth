<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div class="w-full lg:pt-8 flex justify-start top-6 right-0 left-0">
        <div class="p-4 text-black uppercase">
            <h1 class="DoctorSoosBold lg:text-6xl text-5xl text-lime-500">
                {{ title }}
            </h1>
        </div>
    </div>
</template>
