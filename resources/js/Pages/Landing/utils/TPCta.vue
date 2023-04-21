<script></script>
<template>
    <h1
        class="DoctorSoosBold text-white text-6xl lg:px-0 px-12 font-semibold mt-20 lg:mb-10 text-center"
    >
        Learn more about us
    </h1>
    <span
        class="MerriweatherSansRegular text-center font-bold my-10 text-white text-lg"
    >
        <a :href="route('contact-form')" class="text-white/90 hover:text-white">
            Make your appointment now
        </a>
        <hr class="my-4" />

        <a :href="route('patient')" class="text-white/90 hover:text-white">
            Important information
        </a>
        <hr class="my-4" />
        <p>
            <a
                href="https://www.patientconnect365.com/"
                target="_blank"
                class="text-white/90 hover:text-white"
            >
                Connect with us
            </a>
        </p>
    </span>
</template>
