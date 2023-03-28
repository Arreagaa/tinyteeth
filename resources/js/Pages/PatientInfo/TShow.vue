<script setup>
import TInfo from "./utils/TInfo.vue";
</script>
<template>
    <div>
        <p class="DoctorSoosBold text-2xl text-lime-500 ml-5">
            Click On the Links Below for Helpful Information
        </p>
    </div>
    <div class="flex md:flex-row flex-col md:space-x-8 mt-8 px-4">
        <div class="md:hidden block md:w-5/12 lg:w-4/12 w-full">
            <img
                src="/assets/info/pediatric_dentist.jpg"
                alt="Image of Glass bottle"
                class="w-full"
            />
        </div>
        <TInfo />
    </div>
</template>
