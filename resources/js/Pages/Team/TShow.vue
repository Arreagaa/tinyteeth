<script setup>
import TDoctors from "./utils/TDoctors.vue";
import TDoctor from "./utils/TDoctor.vue";
</script>
<template>
    <section class="lg:py-8">
        <TDoctor />
    </section>
    <section class="pt-16">
        <TDoctors />
    </section>
    <div class="text-center items-center py-16 px-6">
        <a
            href="/staff"
            class="DoctorSoosBold text-2xl text-sky-600 hover:text-lime-500"
        >
            DO YOU WANT TO MEET THE REST OF OUR TEAM?
        </a>
    </div>
</template>
