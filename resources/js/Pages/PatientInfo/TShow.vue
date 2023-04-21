<script setup>
import TInfo from "./utils/TInfo.vue";
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import TBagTitle from "../Landing/utils/TBagTitle.vue";
</script>
<template>
    <section data-aos="fade-up">
        <div class="header bg-[url('/assets/bg/fondo.jpg')]">
            <AppHeader />
        </div>
        <section class="relative max-w-app">
            <TBagTitle title="Patient Information" />
            <div>
                <p class="DoctorSoosBold text-2xl text-lime-500 pt-2 ml-5">
                    Necessary information, everything you need to know.
                </p>
            </div>
            <div class="flex justify-center items-center flex-grow">
                <TInfo />
            </div>
        </section>
        <div>
            <AppFooter />
        </div>
    </section>
</template>
