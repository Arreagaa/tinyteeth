<script setup>
import TInfo from "./utils/TInfo.vue";
</script>
<template>
    <section class="mt-4">
        <div
            class="container flex flex-col items-center lg:px-5 px-2 mx-auto md:flex-row"
        >
            <div
                class="flex flex-col items-start w-full pt-0 mb-8 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0"
            >
                <h1 class="DoctorSoosBold my-8 text-5xl text-sky-600">
                    Tiny Teeth
                </h1>
                <p
                    class="MerriweatherSansLight leading-relaxed text-left text-zinc-800 text-lg"
                >
                    The place where you can get a perfect smile.
                </p>
                <div class="lg:flex hidden">
                    <img src="/assets/animals/tour.png" class="" />
                </div>
            </div>
            <TInfo />
        </div>
    </section>
</template>
