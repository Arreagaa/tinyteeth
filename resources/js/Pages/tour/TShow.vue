<script setup>
import TInfo from "./utils/TInfo.vue";
</script>
<template>
    <section class="mt-4">
        <div
            class="flex flex-col items-center px-2 mx-auto lg:px-5 xl:flex-row"
        >
            <div
                class="flex flex-col items-start w-full pt-0 mb-8 text-left xl:items-start md:items-center lg:flex-grow xl:w-1/2 xl:mr-20 xl:pr-24 xl:mb-0"
            >
                <h1 class="my-8 text-5xl DoctorSoosBold text-sky-600">
                    Tiny Teeth
                </h1>
                <p
                    class="text-lg leading-relaxed text-left MerriweatherSansLight text-zinc-800"
                >
                    The place where you can get a perfect smile.
                </p>
                <div class="hidden lg:flex">
                    <img src="/assets/animals/tour.png" class="" />
                </div>
            </div>
            <TInfo />
        </div>
    </section>
</template>
