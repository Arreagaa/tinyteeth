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
                    class="MerriweatherSansExtraBold group cursor-pointer rounded-md hover:text-green-500 flex items-center text-xl px-2"
                >
                    {{ title }}
                </span>
            </div>
        </template>
        <template #content>
            <!-- component, ndropdown content show  -->
            <div class="content px-2 pb-22 pt-4 bg-sky-700 text-white">
                <ul>
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        class="mb-2"
                    >
                        <a
                            class="DoctorSoosBold hover:text-green-500 text-xl"
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
