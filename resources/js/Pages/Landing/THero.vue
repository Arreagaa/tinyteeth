<template>
    <section
        id="hero"
        class="lg:bg-[url('/assets/bg/slidekid.jpg')] bg-[url('/assets/bg/res_bg.jpg')] bg-cover lg:bg-left bg-bottom"
    >
        <div class="hero-container">
            <path d="M51,267 C243,25 254,26 459,283" />
            <div id="heroCarousel" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div
                            class="absolute hidden lg:block carousel-container top-40 left-52"
                        >
                            <section
                                class="flex flex-wrap items-center w-full px-4 py-4 mx-auto -mx-6 lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md"
                            >
                                <div class="flex w-full px-3">
                                    <div
                                        class="max-w-lg mx-auto mb-8 text-center text-white lg:mx-0 lg:max-w-md lg:text-left"
                                    >
                                        <h2
                                            class="mt-12 text-left DoctorSoosBold lg:text-9xl"
                                        >
                                            Welcome to Tiny Teeth
                                        </h2>
                                        <p
                                            class="visible mx-0 mt-3 mb-0 text-4xl leading-relaxed text-left text-white DoctorSoosBold"
                                        >
                                            Where you can have a smile as
                                            healthy as mine.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div
                            class="absolute lg:hidden carousel-container top-12 left-4"
                        >
                            <section
                                class="flex flex-wrap items-center w-full px-4 mx-auto -mx-3 lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md"
                            >
                                <div class="flex w-full px-3 lg:w-2/5">
                                    <div
                                        class="max-w-lg mx-auto mb-8 text-center text-white lg:mx-0 lg:max-w-md lg:text-left"
                                    >
                                        <h2
                                            class="text-left DoctorSoosBold text-7xl"
                                        >
                                            Welcome to Tiny Teeth
                                        </h2>
                                        <p
                                            class="visible mx-0 mt-3 mb-0 text-3xl text-left text-white DoctorSoosBold"
                                        >
                                            Where you can have a smile as
                                            healthy as mine.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#hero {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
@media (max-height: 500px) {
    #hero {
        height: 150vh;
    }
}
</style>
