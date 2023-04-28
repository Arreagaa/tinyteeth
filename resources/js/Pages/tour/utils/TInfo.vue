<script>
import TTour from "./TTour.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
        TTour,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    data() {
        return {
            tour: [
                {
                    image: "/assets/tour/tour1.jpg",
                },
                {
                    image: "/assets/tour/image02.jpg",
                },
                {
                    image: "/assets/tour/image03.jpg",
                },
                {
                    image: "/assets/clinic/about.jpg",
                },
                {
                    image: "/assets/tour/image04.jpg",
                },
                {
                    image: "/assets/tour/image06.jpg",
                },
                {
                    image: "/assets/tour/image09.jpg",
                },
                {
                    image: "/assets/tour/image10.jpg",
                },
                {
                    image: "/assets/tour/image11.jpg",
                },
                {
                    image: "/assets/tour/image12.jpg",
                },
                {
                    image: "/assets/tour/image13.jpg",
                },
                {
                    image: "/assets/tour/image14.jpg",
                },
            ],
        };
    },
};
</script>
<template>
    <div class="w-full lg:max-w-3xl lg:mt-10">
        <div class="swiper inline-block">
            <swiper :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(item, index) in tour" :key="index">
                    <TTour :item="item" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-button-next,
.swiper-button-prev {
    color: #0284c7;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card {
    background-size: cover;
    padding: 120px 0;
    height: 700px;
}
</style>
