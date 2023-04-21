<script>
import TTestimonials from "../Testimonials/TShow.vue";
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import TContact from "../Contact/TContact.vue";
import TBagTitle from "./utils/TBagTitle.vue";
import TServices from "./TServices.vue";
import TInfo from "./utils/TInfo.vue";
import TShow from "../Team/TShow.vue";
import TTour from "../tour/TShow.vue";
import TAbout from "./TAbout.vue";
import THero from "./THero.vue";
import TCta from "./TCta.vue";

export default {
    components: {
        AppHeader,
        AppFooter,
        TBagTitle,
        TInfo,
        TTour,
        TContact,
        TAbout,
        THero,
        TCta,
        TTestimonials,
        TShow,
        TServices,
    },
};
</script>
<template>
    <section
        id="Welcome"
        class="header bg-[url('/assets/bg/fondo.jpg')] bg-cover bg-center bg-repeat bg-fixed"
        data-aos="fade-up"
    >
        <div>
            <AppHeader />
            <THero />
        </div>
    </section>
    <TCta />

    <section
        id="about"
        class="bg-[url('/assets/bg/fondo.jpg')] bg-cover bg-center bg-repeat bg-fixed"
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
            <div id="services">
                <TBagTitle title="Our Services" />
            </div>
            <div class="pb-8">
                <TServices />
            </div>
        </div>
    </section>

    <section
        id="doctors"
        class="bg-[url('/assets/bg/fondo.jpg')] bg-cover bg-center bg-repeat bg-fixed"
    >
        <div class="relative max-w-app">
            <TBagTitle title="Meet Our Doctors" />
            <TShow />
        </div>
    </section>

    <section
        id="tour"
        class="bg-[url('/assets/bg/fondo.jpg')] bg-cover bg-center bg-repeat bg-fixed pb-20"
    >
        <div class="relative max-w-app">
            <TBagTitle title="Tour Our Facility" />
            <TTour />
        </div>
    </section>

    <section id="reviews" class="bg-white">
        <div class="">
            <div class="max-w-app">
                <TBagTitle title="Happy Customers" />
            </div>
            <TTestimonials />
        </div>
    </section>

    <section
        id="contact"
        class="bg-[url('/assets/bg/fondo.jpg')] bg-cover bg-center bg-repeat bg-fixed pb-16"
    >
        <div class="relative max-w-app">
            <TBagTitle title="Contact Us!" />
            <TContact />
        </div>
    </section>

    <section
        class="bg-[url('/assets/bg/fondo.jpg')] bg-cover bg-center bg-repeat bg-fixed"
    >
        <AppFooter />
    </section>
</template>
