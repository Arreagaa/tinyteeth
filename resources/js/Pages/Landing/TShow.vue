<script setup>
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import TBagTitle from "./utils/TBagTitle.vue";
import TInfo from "./utils/TInfo.vue";
import TShowInfo from "../PatientInfo/TShow.vue";
import TTour from "../tour/TShow.vue";
import TAbout from "./TAbout.vue";
import TShow from "../Team/TShow.vue";
import THero from "./THero.vue";
import TCta from "./TCta.vue";
</script>
<template>
    <section id="Welcome" class="header bg-blue-50">
        <div>
            <AppHeader />
            <THero />
        </div>
    </section>
    <TCta />

    <section class="bg-blue-50">
        <div class="relative py-10 max-w-app">
            <div class="my-10">
                <TBagTitle id="About" title="About Us" />
            </div>
            <div class="my-2">
                <TAbout />
            </div>
            <div class="my-10">
                <TInfo />
            </div>
        </div>
    </section>

    <section class="bg-blue-50">
        <div class="relative max-w-app">
            <TBagTitle id="About" title="Meet Our Doctors" />
            <TShow />
        </div>
    </section>

    <section class="bg-blue-50 py-16">
        <div class="relative max-w-app">
            <TBagTitle id="About" title="Patient Information" />
            <TShowInfo />
        </div>
    </section>

    <section class="bg-blue-50">
        <div class="relative max-w-app">
            <TBagTitle id="About" title="Tour Our Facility" />
            <TTour />
        </div>
    </section>

    <section class="bg-blue-50">
        <AppFooter />
    </section>
</template>
