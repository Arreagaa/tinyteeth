<script setup>
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import TShowInfo from "../PatientInfo/TShow.vue";
import TBagTitle from "./utils/TBagTitle.vue";
import TInfo from "./utils/TInfo.vue";
import TShow from "../Team/TShow.vue";
import TTour from "../tour/TShow.vue";
import TContact from "../Contact/TContact.vue";
import TAbout from "./TAbout.vue";
import THero from "./THero.vue";
import TCta from "./TCta.vue";
</script>
<template>
    <section id="Welcome" class="header bg-[url('/assets/bg/fondo_nubes.jpg')]">
        <div>
            <AppHeader />
            <THero />
        </div>
    </section>
    <TCta />

    <section
        id="About"
        class="bg-[url('/assets/bg/fondo_nubes.jpg')] bg-cover bg-center bg-repeat bg-fixed"
    >
        <div class="relative py-10 max-w-app">
            <div class="my-10">
                <TBagTitle title="About Us" />
            </div>
            <div class="my-2">
                <TAbout />
            </div>
            <div class="my-10">
                <TInfo />
            </div>
        </div>
    </section>

    <section
        id="Doctors"
        class="bg-[url('/assets/bg/fondo_nubes.jpg')] bg-cover bg-center bg-repeat bg-fixed"
    >
        <div class="relative max-w-app">
            <TBagTitle title="Meet Our Doctors" />
            <TShow />
        </div>
    </section>

    <section id="Tour" class="bg-white pb-20">
        <div class="relative max-w-app">
            <TBagTitle title="Tour Our Facility" />
            <TTour />
        </div>
    </section>

    <section
        id="Contact"
        class="bg-[url('/assets/bg/fondo_nubes.jpg')] bg-cover bg-center bg-repeat bg-fixed pb-16"
    >
        <div class="relative max-w-app">
            <TBagTitle title="Contact Us!" />
            <TContact />
        </div>
    </section>

    <section
        class="bg-[url('/assets/bg/fondo_nubes.jpg')] bg-cover bg-center bg-repeat bg-fixed"
    >
        <AppFooter />
    </section>
</template>
