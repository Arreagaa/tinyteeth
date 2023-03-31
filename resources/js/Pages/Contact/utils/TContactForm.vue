<script setup>
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

const form = useForm({
    name: "",
    phone: "",
    email: "",
    body: "",
});

const showMessage = ref(false);

function setShowMessage(value) {
    showMessage.value = value;
}

function cleanForm() {
    form.reset();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
}

const submit = () => {
    form.post(route("contact"), {
        onSuccess: () => cleanForm(),
        preserveScroll: true,
    });
};
</script>
<template>
    <div class="flex justify-center items-center bg-white">
        <div class="container mx-auto my-4 px-4">
            <form
                @submit.prevent="submit"
                method="POST"
                class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"
            >
                <div class="flex">
                    <h1
                        class="MerriweatherSansExtraBold text-sky-600 uppercase text-3xl"
                    >
                        Contact Us
                    </h1>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-1 mt-5">
                    <input
                        v-if="form.errors.name"
                        v-model="form.name"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus-danger focus-form"
                        type="text"
                        placeholder="Your Name *"
                    />
                    <input
                        v-else
                        v-model="form.name"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus-form"
                        type="text"
                        placeholder="Your Name *"
                    />
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input
                        v-if="form.errors.email"
                        v-model="form.email"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus-danger focus-form"
                        type="email"
                        placeholder="Email *"
                    />
                    <input
                        v-else
                        v-model="form.email"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus-form"
                        type="email"
                        placeholder="Email *"
                    />
                    <input
                        v-if="form.errors.phone"
                        v-model="form.phone"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus-danger focus-form"
                        type="number"
                        placeholder="Phone *"
                    />
                    <input
                        v-else
                        v-model="form.phone"
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus-form"
                        type="number"
                        placeholder="Phone *"
                    />
                </div>
                <div class="my-4">
                    <textarea
                        v-if="form.errors.body"
                        v-model="form.body"
                        placeholder="Message *"
                        class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus-danger focus-form"
                    ></textarea>
                    <textarea
                        v-else
                        v-model="form.body"
                        placeholder="Message *"
                        class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus-form"
                    ></textarea>
                </div>
                <div class="inline-flex my-2">
                    <button
                        type="submit"
                        class="text-white bg-sky-600 hover:bg-lime-200 hover:text-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Send Message
                    </button>
                </div>
                <div class="inline-flex justify-end mb-6">
                    <div v-if="showMessage" class="alert-success">
                        The Message was sent correctly, soon we we will get in
                        touch!
                    </div>
                    <div
                        v-if="
                            (form.errors.name,
                            form.errors.phone,
                            form.errors.email || form.errors.body)
                        "
                        class="alert-danger"
                    >
                        You must complete the information on the form to
                        continue.
                    </div>
                </div>
            </form>

            <div
                class="lg:flex hidden w-full lg:-mt-96 lg:w-2/6 ml-auto bg-transparent px-4"
            >
                <img src="/assets/animals/zebra_hippo.png" class="" />
            </div>
            <div
                class="lg:hidden w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-sky-600 rounded-2xl"
            >
                <div class="flex flex-col text-white">
                    <h1
                        class="MerriweatherSansExtraBold uppercase text-2xl my-4"
                    >
                        Drop in our office
                    </h1>
                    <p class="MerriweatherSansLight text-white text-xl">
                        Make An Appointment Today!
                    </p>

                    <div class="flex my-4 w-2/3 lg:w-1/2">
                        <div class="flex flex-col">
                            <i class="fas fa-map-marker-alt pt-2 pr-2" />
                        </div>
                        <div class="flex flex-col">
                            <h2 class="MerriweatherSansExtraBold text-2xl">
                                See us
                            </h2>
                            <p class="MerriweatherSansLight text-white mt-2">
                                710 King Street Bristol, CT 06010.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
