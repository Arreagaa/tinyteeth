<script setup></script>
<template>
    <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h2
                    class="DoctorSoosBold mb-4 text-5xl font-extrabold leading-tight text-gray-900"
                >
                    Visit us, happy to serve you!
                </h2>
                <p
                    class="MerriweatherSansRegular mb-6 font-light text-gray-500 md:text-lg"
                >
                    The place where you can have a beautiful and healthy smile.
                </p>
                <a
                    :href="route('contact-form')"
                    class="text-white bg-blue-300 hover:bg-lime-200 hover:text-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                    <l-icon
                        icon="fa-solid fa-tooth"
                        class="text-white text-xl"
                    />
                    We will wait for you!</a
                >
            </div>
        </div>
    </section>
</template>
