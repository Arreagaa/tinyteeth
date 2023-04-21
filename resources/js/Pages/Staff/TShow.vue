<script setup>
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import TStaff from "./TStaff.vue";
</script>
<template>
    <section data-aos="fade-up">
        <div
            class="header bg-[url('/assets/bg/fondo.jpg')] bg-cover bg-center bg-repeat bg-fixed"
        >
            <AppHeader />
        </div>
        <section>
            <div
                class="h-screen w-full bg-[url('/assets/staff/Group1.jpg')] bg-cover bg-center"
            ></div>
        </section>
        <div>
            <div class="py-24">
                <div
                    class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6"
                >
                    <div class="mb-12 space-y-2 text-center object-">
                        <h2 class="DoctorSoosBold text-6xl text-lime-500">
                            Meet Our Team
                        </h2>
                    </div>
                    <TStaff />
                </div>
            </div>
        </div>
        <div>
            <AppFooter />
        </div>
    </section>
</template>
