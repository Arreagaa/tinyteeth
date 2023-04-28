<script setup>
import TInfo from "./utils/TInfo.vue";
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import TBagTitle from "../Landing/utils/TBagTitle.vue";
</script>
<template>
    <section data-aos="fade-up">
        <div
            class="header bg-[url('/assets/bg/fondo.jpg')] bg-cover bg-center bg-repeat bg-fixed"
        >
            <AppHeader />
        </div>
        <section class="relative max-w-app">
            <TBagTitle title="Patient Information" />
            <div class="flex justify-center items-center flex-grow">
                <TInfo />
            </div>
        </section>
        <div>
            <AppFooter />
        </div>
    </section>
</template>
