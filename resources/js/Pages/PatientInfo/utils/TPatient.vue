<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
        idItem: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            showShipping: false,
        };
    },
    methods: {
        toggleShipping() {
            this.showShipping = !this.showShipping;
        },
    },
};
</script>
<template>
    <div>
        <div
            class="flex justify-between items-center cursor-pointer lg:mt-2"
            @click="toggleShipping"
        >
            <h3
                class="MerriweatherSansRegular lg:text-xl leading-5 text-gray-800 hover:text-sky-600"
            >
                {{ item.name }}
            </h3>
            <button
                aria-label="too"
                class="text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        :class="showShipping ? '' : 'hidden'"
                        d="M10 4.1665V15.8332"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        :class="showShipping ? 'hidden' : ''"
                        d="M4.16602 10H15.8327"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
        <a
            class="MerriweatherSansLight lg:text-lg leading-6 text-sky-600 hover:text-lime-500 mt-4 w-11/12 underline"
            :class="showShipping ? 'block' : 'hidden'"
            :href="item.pdf"
            target="_blank"
        >
            {{ item.description }}
        </a>
    </div>
    <hr class="my-7 bg-gray-200" />
</template>
