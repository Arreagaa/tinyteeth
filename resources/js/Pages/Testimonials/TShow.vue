<script>
import TReviews from "./TReviews.vue";

export default {
    components: {
        TReviews,
    },
};
</script>
<template>
    <section>
        <div class="mx-auto px-6 py-10">
            <h1
                class="MerriweatherSansExtraBold text-center text-3xl capitalize text-gray-800 lg:text-4xl"
            >
                Testimonials
            </h1>

            <div class="mx-auto mt-6 flex justify-center">
                <span
                    class="inline-block h-1 w-40 rounded-full bg-sky-600"
                ></span>
                <span
                    class="mx-1 inline-block h-1 w-3 rounded-full bg-sky-600"
                ></span>
                <span
                    class="inline-block h-1 w-1 rounded-full bg-sky-600"
                ></span>
            </div>

            <div class="items-center text-center pt-12">
                <l-icon
                    icon="fa-solid fa-quote-left"
                    class="text-black text-5xl text-sky-600"
                />
            </div>
            <TReviews />
        </div>
    </section>
</template>
