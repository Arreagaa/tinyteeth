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
            class="header justify-center max-w-app px-16 flex sm:flex-nowrap flex-wrap"
        >
            <div class="w-full px-4 inline-flex items-center">
                <div class="text-center mx-auto max-w-[510px]">
                    <a
                        :href="route('landing')"
                        class="font-semibold text-lg text-primary block mr-4"
                    >
                        <img
                            src="/assets/tiny_teeth_logo.png"
                            alt="image"
                            class="rounded mx-auto d-block my-4 lg:scale-75 scale-90"
                        />
                    </a>
                </div>
                <div class="lg:hidden block">
                    <a @click="active = !active">
                        <l-icon
                            icon="fa-solid fa-bars"
                            class="text-black text-2xl"
                        />
                    </a>
                </div>
            </div>
        </div>
        <header class="max-w-fit m-auto">
            <div class="flex justify-center items-center lg:py-2 sm:py-8">
                <nav
                    class="flex w-full lg:p-4 items-center lg:justify-between justify-center"
                >
                    <ul
                        class="lg:flex hidden flex-col items-center lg:items-start lg:flex-row font-bold text-sm uppercase tracking-tight text-black gap-x-4"
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
                        <li class="py-2 text-sky-600 text-3xl">
                            <a href="https://www.facebook.com/tinyteeth?mibextid=LQQJ4d" target="_blank">
                                <l-icon icon="fa-brands fa-facebook" />
                            </a>
                            <a href="https://www.instagram.com/tinyteethct/" target="_blank">
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
                            class="rounded mx-auto d-block mt-4 scale-90"
                        />
                    </div>
                    <a
                        class="absolute top-8 right-8"
                        style="z-index: 99"
                        @click="active = !active"
                    >
                        <l-icon
                            icon="fa-solid fa-x"
                            class="text-black text-2xl mt-1"
                        />
                    </a>
                    <ul
                        class="font-bold uppercase tracking-tight gap-x-8 text-black gap-y-4 px-8 text-lg"
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
                            class="flex items-center text-sky-600 text-3xl pl-6"
                        >
                            <a href="https://www.facebook.com/tinyteeth?mibextid=LQQJ4d" target="_blank">
                                <l-icon icon="fa-brands fa-facebook" />
                            </a>
                            <a href="https://www.instagram.com/tinyteethct/" target="_blank">
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
