<script setup>
import { Link } from '@inertiajs/vue3';
</script>
<template>
    <div class="h-screen flex justify-center items-center overflow-hidden">
        <div
            class="bg-sky-800 bg-opacity-80 xl:px-72 flex flex-col items-center justify-center relative z-40"
        >
            <h1
                class="DoctorSoosBold text-white text-7xl max-[375px]:text-6xl px-12 font-semibold mt-20 lg:mb-10 text-center"
            >
                Learn more about us
            </h1>
            <span
                class="MerriweatherSansRegular text-center font-bold my-10 text-white text-xl"
            >
                <Link :href="route('contact-form')" class="text-white"
                    >Make your appointment now</Link
                >
                <hr class="my-4" />
                <Link :href="route('patient')" class="text-white"
                    >Important information</Link
                >
                <hr class="my-4" />
                <p>
                    <a
                        href="https://www.patientconnect365.com/"
                        target="_blank"
                        class="text-white"
                        >Connect with us</a
                    >
                </p>
            </span>
        </div>
    </div>
</template>
