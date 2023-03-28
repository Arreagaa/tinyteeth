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
                            class="lg:block hidden carousel-container absolute top-40 left-52"
                        >
                            <section
                                class="flex flex-wrap items-center -mx-6 px-4 py-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md"
                            >
                                <div class="flex px-3 w-full">
                                    <div
                                        class="text-white mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                                    >
                                        <h2
                                            class="DoctorSoosBold mt-12 text-left lg:text-9xl"
                                        >
                                            Welcome to Tiny Teeth
                                        </h2>
                                        <p
                                            class="DoctorSoosBold visible mx-0 mt-3 mb-0 text-4xl leading-relaxed text-left text-white"
                                        >
                                            Where you can have a smile as
                                            healthy as mine.
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div
                            class="lg:hidden carousel-container absolute top-12 left-4"
                        >
                            <section
                                class="flex flex-wrap items-center -mx-3 px-4 mx-auto w-full lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md"
                            >
                                <div class="flex px-3 w-full lg:w-2/5">
                                    <div
                                        class="text-white mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left"
                                    >
                                        <h2
                                            class="DoctorSoosBold text-7xl text-left"
                                        >
                                            Welcome to Tiny Teeth
                                        </h2>
                                        <p
                                            class="DoctorSoosBold visible mx-0 mt-3 mb-0 text-3xl leading-relaxed text-left text-white"
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
