<script>
import TInfo from "./utils/TInfo.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default {
    components: {
        Swiper,
        SwiperSlide,
        TInfo,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
    data() {
        return {
            posts: [
                {
                    body: "We love Tiny Teeth in Bristol! My little is not the easiest to work on and everyone from the dentist to the assistants are amazing and patient. We even go about every 4 months to get my little more comfortable and it's working.",
                    name: "Sarah",
                    type: "Parent",
                },
                {
                    body: "Tiny teeth is amazing! My kids love going there.",
                    name: "Kelsey",
                    type: "Parent",
                },
                {
                    body: "Tiny Teeth! Been bringing my kids there for over 12 years. Love everyone there.",
                    name: "Jessica",
                    type: "Parent",
                },
                {
                    body: "Tiny Teeth in Bristol on King Street! We absolutely love them!",
                    name: "Susan",
                    type: "Parent",
                },
                {
                    body: "The office was easy to locate, super clean, very friendly. The hygienist was extremely gentle and patient. She eased not only our screaming baby but the nervous first-time parents. By the time it was time for the dentist to check him out, he hardly cried. I was impressed by the entire team. So relieved and excited we found this group as our son’s dentist!",
                    name: "Eliana",
                    type: "Parent",
                },
                {
                    body: "They absolutely make sure you and your child are comfortable and safe. As a first time mom with young children I highly recommend them. All the ladies here are amazing and friendly.",
                    name: "Heather",
                    type: "Parent",
                },
                {
                    body: "My kids love it here. The staff is amazing. They are great with my son that has Autism. My daughter at first was very afraid they made her feel better. Now she tells me how she loves going to the dentist. The rooms are Beautiful so kids friendly.",
                    name: "Erica",
                    type: "Parent",
                },
                {
                    body: "They staff at Tiny teeth were amazing. My son has a speech disorder and they were so nice and made his visit such a great experience. They were beyond friendly and the waiting room and exam rooms are extremely kid friendly, clean. Love the staff and so glad that my son is going to them.",
                    name: "Jenn",
                    type: "Parent",
                },
                {
                    body: "Dr. Patty is amazing! My daughter absolutely FEARS the dentist, I&#39;ve never been able to get her to cooperate with cleanings let alone procedures. Dr. Patty was able to get her to cooperate. She explained everything before she did it to both myself and my daughter. Very Pleased!!! Def Recommend.",
                    name: "Jodi",
                    type: "Parent",
                },
                {
                    body: "From cleanings to procedures, we were greeted by friendly staff, a knowledgeable hygienist, and skilled dentist (Dr. Aurora) all of whom showed the greatest kindness and care to our toddler. Everyone was patient, gentle, and supportive. I would not hesitate to recommend Tiny Teeth to my family and friends. Our daughter enjoyed it so much she didn't want to leave!",
                    name: "Amanda",
                    type: "Parent",
                },
            ],
        };
    },
};
</script>
<template>
    <div class="mx-auto lg:mt-16 my-12 max-w-6xl flex items-center">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(post, index) in posts" :key="index">
                <TInfo :post="post" />
            </swiper-slide>
        </swiper>
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
