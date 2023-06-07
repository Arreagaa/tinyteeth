<script setup>
import TDropdown from "./TDropdown.vue";
defineProps({
    title: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        default: () => {
            return [];
        },
    },
});
</script>

<template>
    <TDropdown>
        <template #trigger>
            <!-- component, ndropdown button show  -->
            <div>
                <span
                    class="flex items-center px-2 text-xl rounded-md cursor-pointer md:text-base MerriweatherSansExtraBold group hover:text-green-500 2xl:text-xl lg:text-lg"
                >
                    {{ title }}
                </span>
            </div>
        </template>
        <template #content>
            <!-- component, ndropdown content show  -->
            <div class="px-2 pt-4 text-white content pb-22 bg-sky-700">
                <ul>
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        class="mb-2"
                    >
                        <a
                            class="text-xl md:text-base lg:text-lg 2xl:text-xl DoctorSoosBold hover:text-green-500"
                            :href="item.url"
                        >
                            {{ item.title }}
                        </a>
                    </li>
                </ul>
                <!-- component, ndropdown urls export  -->
            </div>
        </template>
    </TDropdown>
</template>
