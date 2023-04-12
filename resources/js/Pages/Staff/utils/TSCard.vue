<script>
export default {
    props: {
        item: Object,
    },
};
</script>
<template>
    <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
            :src="item.image"
            :alt="name"
            class="w-full h-96 object-cover object-center"
        />
        <div class="p-4 h-80 overflow-y-auto">
            <h4 class="DoctorSoosBold text-3xl font-semibold text-sky-600 pt-4 px-2">
                {{ item.name }}
            </h4>
            <p class="text-gray-700 mt-2 text-justify px-2">{{ item.body }}</p>
        </div>
    </div>
</template>
