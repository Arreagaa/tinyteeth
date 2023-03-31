<script setup>
import TInfo from "./utils/TInfo.vue";
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import TBagTitle from "../Landing/utils/TBagTitle.vue";
</script>
<template>
    <div class="header bg-[url('/assets/bg/fondo_nubes.jpg')]">
        <AppHeader />
    </div>
    <section class="relative max-w-app">
        <TBagTitle title="Patient Information" />
        <div>
            <p class="DoctorSoosBold text-2xl text-lime-500 pt-2 ml-5">
                Click On the Links Below for Helpful Information
            </p>
        </div>
        <div class="flex md:flex-row flex-col md:space-x-8 py-16 px-4">
            <div class="md:hidden block md:w-5/12 lg:w-4/12 w-full">
                <img
                    src="/assets/info/pediatric_dentist.jpg"
                    alt="Image of Glass bottle"
                    class="w-full"
                />
            </div>
            <TInfo />
        </div>
    </section>
    <div>
        <AppFooter />
    </div>
</template>
