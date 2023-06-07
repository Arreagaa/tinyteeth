<script setup>
import THeaderButton from "./utils/THeaderButton.vue";
import { ref, watch } from "vue";
const active = ref(false);

watch(active, (newActive) => {
    const body = document.body;

    if (newActive) {
        body.classList.add("overflow-hidden");
        body.classList.remove("overflow-auto");
    } else {
        body.classList.add("overflow-auto");
        body.classList.remove("overflow-hidden");
    }
});

const urls = ref({
    tiny: [
        { title: "Tiny Teeth", url: "/#about" },
        { title: "Our Services", url: "/#services" },
    ],
    team: [
        { title: "Our Doctors", url: "/#doctors" },
        { title: "Our Staff", url: "/staff" },
    ],
    docs: [{ title: "you need to know", url: "/patient" }],
    tour: [{ title: "Our Facilities", url: "/#tour" }],
    reviews: [{ title: "Happy Customers", url: "/#reviews" }],
    contact: [
        { title: "Find Us", url: "/#contact" },
        { title: "Contact Form", url: "/contact-form" },
    ],
});
</script>
<template>
    <div class="Header">
        <div
            class="flex flex-wrap justify-center px-16 header max-w-app sm:flex-nowrap"
        >
            <div class="inline-flex items-center w-full px-4">
                <div class="text-center mx-auto max-w-[510px]">
                    <a :href="route('landing')" class="block mr-4">
                        <img
                            src="/assets/tiny_teeth_logo.png"
                            alt="image"
                            class="xl:w-[22rem] lg:w-64 md:w-[20rem] my-4 w-64"
                        />
                    </a>
                </div>
                <div class="block lg:hidden">
                    <a @click="active = !active">
                        <l-icon
                            icon="fa-solid fa-bars"
                            class="text-2xl text-sky-600"
                        />
                    </a>
                </div>
            </div>
        </div>
        <header class="m-auto max-w-fit">
            <div class="flex items-center justify-center lg:py-2 sm:py-8">
                <nav
                    class="flex items-center justify-center w-full lg:p-4 lg:justify-between"
                >
                    <ul
                        class="flex-col items-center hidden font-bold tracking-tight text-black uppercase lg:flex lg:items-start lg:flex-row gap-x-4"
                    >
                        <li>
                            <THeaderButton
                                title="About Us"
                                :items="urls.tiny"
                            />
                        </li>
                        <li>
                            <THeaderButton
                                title="Meet our Team"
                                :items="urls.team"
                            />
                        </li>
                        <li>
                            <THeaderButton
                                title="Patient Information"
                                :items="urls.docs"
                            />
                        </li>
                        <li>
                            <THeaderButton
                                title="Tour Our Facility"
                                :items="urls.tour"
                            />
                        </li>

                        <li>
                            <THeaderButton
                                title="testimonials"
                                :items="urls.reviews"
                            />
                        </li>
                        <li>
                            <THeaderButton
                                title="Contact Us"
                                :items="urls.contact"
                            />
                        </li>
                        <li class="py-2 text-3xl text-sky-600">
                            <a
                                href="https://www.facebook.com/tinyteeth?mibextid=LQQJ4d"
                                target="_blank"
                            >
                                <l-icon icon="fa-brands fa-facebook" />
                            </a>
                            <a
                                href="https://www.instagram.com/tinyteethct/"
                                target="_blank"
                            >
                                <l-icon
                                    icon="fa-brands fa-instagram"
                                    class="px-2"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div
                v-if="active"
                class="absolute w-screen h-screen bg-[url('/assets/bg/fondo.jpg')] bg-cover top-0 left-0"
                style="z-index: 98"
            >
                <div class="w-screen h-screen">
                    <div class="p-8">
                        <img
                            src="/assets/tiny_teeth_logo.png"
                            alt="image"
                            class="w-64 mt-4"
                        />
                    </div>
                    <a
                        class="absolute top-8 right-8"
                        style="z-index: 99"
                        @click="active = !active"
                    >
                        <l-icon
                            icon="fa-solid fa-x"
                            class="mt-1 text-2xl text-sky-600"
                        />
                    </a>
                    <ul
                        class="px-8 font-bold tracking-tight text-black uppercase gap-x-8 gap-y-4"
                    >
                        <li>
                            <THeaderButton
                                title="About Us"
                                :items="urls.tiny"
                            />
                        </li>
                        <li>
                            <THeaderButton
                                title="MEET OUR TEAM"
                                :items="urls.team"
                            />
                        </li>
                        <li>
                            <THeaderButton
                                title="PATIENT INFORMATION"
                                :items="urls.docs"
                            />
                        </li>
                        <li>
                            <THeaderButton
                                title="TOUR OUR FACILITY"
                                :items="urls.tour"
                            />
                        </li>
                        <li>
                            <THeaderButton
                                title="TESTIMONIALS"
                                :items="urls.reviews"
                            />
                        </li>
                        <li>
                            <THeaderButton
                                title="CONTACT US"
                                :items="urls.contact"
                            />
                        </li>
                        <li
                            class="flex items-center pl-6 text-3xl text-sky-600"
                        >
                            <a
                                href="https://www.facebook.com/tinyteeth?mibextid=LQQJ4d"
                                target="_blank"
                            >
                                <l-icon icon="fa-brands fa-facebook" />
                            </a>
                            <a
                                href="https://www.instagram.com/tinyteethct/"
                                target="_blank"
                            >
                                <l-icon
                                    icon="fa-brands fa-instagram"
                                    class="px-2"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</template>
