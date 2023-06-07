<script>
import { Link } from "@inertiajs/vue3";
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
    components: {
        Link,
    },
};
</script>
<template>
    <div class="flex items-center max-w-screen-xl mx-auto">
        <img src="/assets/bg/Inicio.png" class="" />
    </div>
    <footer class="px-6 py-12 bg-lime-200 text-zinc-900 lg:px-8">
        <div class="max-w-screen-xl mx-auto mb-6 md:mb-12">
            <img class="w-64" src="/assets/tiny_teeth_logo.png" />
        </div>
        <div class="max-w-screen-xl mx-auto">
            <div
                class="grid grid-cols-8 divide-y-2 md:grid-cols-9 lg:grid-cols-8 divide-sky-600 md:divide-x-2 md:divide-y-0 md:-mx-8"
            >
                <div
                    class="col-span-8 py-4 md:col-span-3 lg:col-span-2 md:px-8 md:py-0"
                >
                    <h5 class="text-2xl DoctorSoosBold text-sky-600">
                        Tiny Teeth
                    </h5>
                    <nav class="mt-4">
                        <ul class="space-y-2">
                            <li>
                                <Link
                                    href="/#about"
                                    class="text-base font-normal hover:text-sky-600"
                                    >About Us</Link
                                >
                            </li>
                            <li>
                                <Link
                                    href="/#tour"
                                    class="text-base font-normal hover:text-sky-600"
                                    >Tour Our Facility
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div
                    class="col-span-8 py-4 md:col-span-3 lg:col-span-3 md:px-8 md:py-0"
                >
                    <h5 class="text-2xl DoctorSoosBold text-sky-600">
                        Website Links
                    </h5>
                    <nav class="mt-4">
                        <ul class="grid lg:grid-cols-2">
                            <li class="mb-2">
                                <Link
                                    href="/#doctors"
                                    class="text-base font-normal hover:text-sky-600"
                                    >Meet Our Doctors
                                </Link>
                            </li>
                            <li class="mb-2">
                                <Link
                                    href="/staff"
                                    class="text-base font-normal hover:text-sky-600"
                                    >Meet Our Staff
                                </Link>
                            </li>
                            <li class="mb-2">
                                <Link
                                    href="/#reviews"
                                    class="text-base font-normal hover:text-sky-600"
                                    >Happy Customers
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div
                    class="col-span-8 py-4 md:col-span-3 lg:col-span-3 md:px-8 md:py-0"
                >
                    <h5 class="text-2xl DoctorSoosBold text-sky-600">
                        Resources
                    </h5>
                    <nav class="mt-4">
                        <ul class="grid lg:grid-cols-2">
                            <li class="mb-2">
                                <Link
                                    href="/#contact"
                                    class="text-base font-normal hover:text-sky-600"
                                    >Contact Us
                                </Link>
                            </li>
                            <li class="mb-2">
                                <a
                                    href="https://www.google.com/maps/dir//710+King+Street,+Bristol,+CT+06010,+EE.+UU./@41.6874206,-72.9949581,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e7ba5d0720ce31:0xf2f6c0ecf3a36a25!2m2!1d-72.9249182!2d41.6874419"
                                    target="_blank"
                                    class="text-base font-normal hover:text-sky-600"
                                    >Get Directions
                                </a>
                            </li>
                            <li class="mb-2">
                                <Link
                                    href="/patient"
                                    class="text-base font-normal hover:text-sky-600"
                                    >Patient Information
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div
            class="flex flex-col items-center justify-between max-w-screen-xl pt-8 mx-auto mt-8 space-y-4 border-t-2 md:flex-row border-sky-600"
        >
            <p class="text-sm text-center md:text-right">
                &copy;{{ currentYear }} Tiny Teeth Pediatric Denistry, PLLC. A
                Childrens Dentist in Bristol, CT.
            </p>
        </div>
    </footer>
</template>
