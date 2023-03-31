<script setup>
import TContactForm from "./utils/TContactForm.vue";
import AppHeader from "../../Layouts/AppHeader.vue";
import AppFooter from "../../Layouts/AppFooter.vue";
import TBagTitle from "../Landing/utils/TBagTitle.vue";
</script>
<template>
    <div class="header bg-[url('/assets/bg/fondo_nubes.jpg')]">
        <AppHeader />
    </div>
    <section class="relative max-w-app">
        <TBagTitle title="Send us a message" />
        <div>
            <TContactForm />
        </div>
    </section>
    <div>
        <AppFooter />
    </div>
</template>
