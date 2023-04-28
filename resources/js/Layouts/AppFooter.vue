<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>
<template>
    <div class="flex max-w-screen-xl mx-auto items-center">
        <img src="/assets/bg/inicio.png" class="" />
    </div>
    <footer class="bg-lime-200 text-zinc-900 px-6 lg:px-8 py-12">
        <div class="max-w-screen-xl mx-auto mb-12">
            <img
                class="h-20"
                src="/assets/tiny_teeth_logo.png"
                alt="UptimeMate logo"
            />
        </div>
        <div class="max-w-screen-xl mx-auto">
            <div
                class="grid grid-cols-8 md:grid-cols-9 lg:grid-cols-8 divide-sky-600 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8"
            >
                <div
                    class="col-span-8 md:col-span-3 lg:col-span-2 md:px-8 py-4 md:py-0"
                >
                    <h5 class="DoctorSoosBold text-2xl text-sky-600">
                        Tiny Teeth
                    </h5>
                    <nav class="mt-4">
                        <ul class="space-y-2">
                            <li>
                                <a
                                    href="/#about"
                                    class="font-normal text-base hover:text-sky-600"
                                    >About Us</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/#tour"
                                    class="font-normal text-base hover:text-sky-600"
                                    >Tour Our Facility
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div
                    class="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0"
                >
                    <h5 class="DoctorSoosBold text-2xl text-sky-600">
                        Website Links
                    </h5>
                    <nav class="mt-4">
                        <ul class="grid lg:grid-cols-2">
                            <li class="mb-2">
                                <a
                                    href="/#doctors"
                                    class="font-normal text-base hover:text-sky-600"
                                    >Meet Our Doctors
                                </a>
                            </li>
                            <li class="mb-2">
                                <a
                                    href="/staff"
                                    class="font-normal text-base hover:text-sky-600"
                                    >Meet Our Staff
                                </a>
                            </li>
                            <li class="mb-2">
                                <a
                                    href="/#reviews"
                                    class="font-normal text-base hover:text-sky-600"
                                    >Happy Customers
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div
                    class="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-4 md:py-0"
                >
                    <h5 class="DoctorSoosBold text-2xl text-sky-600">
                        Resources
                    </h5>
                    <nav class="mt-4">
                        <ul class="grid lg:grid-cols-2">
                            <li class="mb-2">
                                <a
                                    href="/#contact"
                                    class="font-normal text-base hover:text-sky-600"
                                    >Contact Us
                                </a>
                            </li>
                            <li class="mb-2">
                                <a
                                    href="https://www.google.com/maps/dir//710+King+Street,+Bristol,+CT+06010,+EE.+UU./@41.6874206,-72.9949581,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89e7ba5d0720ce31:0xf2f6c0ecf3a36a25!2m2!1d-72.9249182!2d41.6874419"
                                    target="_blank"
                                    class="font-normal text-base hover:text-sky-600"
                                    >Get Directions
                                </a>
                            </li>
                            <li class="mb-2">
                                <a
                                    href="/patient"
                                    class="font-normal text-base hover:text-sky-600"
                                    >Patient Information
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div
            class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 border-t-2 border-sky-600 pt-8"
        >
            <p class="text-sm text-center md:text-right">
                &copy;{{ currentYear }} Tiny Teeth Pediatric Denistry, PLLC. A Childrens
                Dentist in Bristol, CT.
            </p>
        </div>
    </footer>
</template>
