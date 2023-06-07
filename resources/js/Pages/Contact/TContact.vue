<script setup>
import { router } from "@inertiajs/vue3";
import { ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { Link } from "@inertiajs/vue3";

const center = ref({ lat: 41.68741798281349, lng: -72.92500940903643 });
</script>
<template>
    <div
        class="flex flex-col px-6 mx-auto space-y-6 lg:flex-row py-2"
    >
        <div
            class="flex items-center justify-center w-full h-96 lg:mr-16 mt-4 lg:w-1/2"
        >
            <GoogleMap
                api-key="AIzaSyCq7aHTKV601i0b1fosJWMDZcgZizakR1A"
                style="width: 100%; height: 100%"
                :center="center"
                :zoom="15"
            >
                <Marker :options="{ position: center }" />
            </GoogleMap>
        </div>
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <div class="space-y-4">
                    <p class="flex items-center -mx-2 text-gray-700">
                        <h2 class="DoctorSoosBold text-4xl text-sky-600">
                            Call Us!
                        </h2>
                        <span class="MerriweatherSansRegular text-lime-500 text-xl">Phone 860.583.TINY <br> Fax 860.583.8470</span>
                    </p>
                    <p class="flex items-center -mx-2 text-gray-700">
                        <h2 class="DoctorSoosBold text-4xl text-sky-600">
                            Email Us!
                        </h2>
                        <a href="mailto:tinyteethct@yahoo.com" class="MerriweatherSansRegular text-lime-500 text-xl underline">tinyteethct@yahoo.com</a>
                    </p>
                    <p class="flex items-center -mx-2 text-gray-700">
                        <h2 class="DoctorSoosBold text-4xl text-sky-600">
                            See Us!
                        </h2>
                        <span class="MerriweatherSansRegular text-lime-500 text-xl">710 King Street Bristol, CT 06010</span>
                    </p>
                </div>
            </div>

            <div class="w-full pt-4 lg:max-w-sm">
                <Link
                    :href="route('contact-form')"
                    class="text-white bg-sky-600 hover:bg-lime-200 hover:text-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                    Contact Form
                </Link>
            </div>
        </div>
    </div>
</template>
