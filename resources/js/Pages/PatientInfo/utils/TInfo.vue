<script setup>
import TPatient from "./TPatient.vue";

const information = [
    {
        name: "New Patient Information Forms",
        pdf: "/assets/info/new-patient-registration-forms.pdf",
        description: "Patient Information and Helth History Form",
    },
    {
        name: "Your First Vist",
        pdf: "/assets/info/first-visit.pdf",
        description: "Your First Visit",
    },
    {
        name: "Dental Care For Your Baby",
        pdf: "/assets/info/dental-care-baby.pdf",
        description: "Learn more about the Subject",
    },
    {
        name: "Diet and Snacking",
        pdf: "/assets/info/diet-snacking.pdf",
        description: "What is a healthy diet for my child?",
    },
    {
        name: "Fluoride",
        pdf: "/assets/info/fluoride.pdf",
        description: "What is fluoride?",
    },
    {
        name: "Thumb Finger and Pacifier Habits",
        pdf: "/assets/info/thumb-finger-pacifier.pdf",
        description: "Learn more about the Subject",
    },
    {
        name: "Emergency Care",
        pdf: "/assets/info/emergecy-care.pdf",
        description: "Learn more about the Subject",
    },
    {
        name: "Space Maintenance",
        pdf: "/assets/info/space-maintenance.pdf",
        description: "What are space maintainers?",
    },
    {
        name: "Sealants",
        pdf: "/assets/info/sealants.pdf",
        description: "What are sealants?",
    },
    {
        name: "Primary Tooth Chart",
        pdf: "/assets/info/primary-tooth-dev.pdf",
        description: "Learn more about the Subject",
    },
    {
        name: "Permanent Tooth Chart",
        pdf: "/assets/info/permanent-tooth-dev.pdf",
        description: "Learn more about the Subject",
    },
    {
        name: "American Academy of Pediatric Dentistry",
        pdf: "https://www.aapd.org/",
        description: "Visit Website",
    },
    {
        name: "Permanent Tooth Chart",
        pdf: "https://www.ada.org/",
        description: "Visit Website",
    },
];
</script>
<template>
    <div class="w-full md:mt-0 sm:mt-14 mt-10">
        <TPatient
            v-for="(item, index) in information"
            :key="index"
            :id-item="index"
            :item="item"
        />
    </div>
</template>
