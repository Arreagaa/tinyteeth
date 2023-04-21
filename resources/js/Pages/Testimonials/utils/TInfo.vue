<script>
export default {
    props: {
        post: Object,
    },
};
</script>
<template>
    <div
        class="MerriweatherSansLight lg:text-lg text-base py-4 lg:px-8 max-w-app"
    >
        <p class="items-center text-center text-gray-800 lg:mx-8">
            ❝ {{ post.body }} ❞
        </p>

        <div class="mt-8 flex flex-col items-center justify-center">
            <div class="mt-4 text-center">
                <h1 class="text-gray-800 font-bold">
                    {{ post.name }}
                </h1>
                <span class="text-lg text-gray-500">{{ post.type }}</span>
            </div>
        </div>
    </div>
</template>
