<script>
import TSCard from "./utils/TSCard.vue";
export default {
    components: {
        TSCard,
    },
    data() {
        return {
            items: [
                {
                    name: "Laureen",
                    body: "Laureen is the Office Manager at Tiny Teeth, with experience in the dental field since 2013. She was born and raised in Bristol, and even graduated from Bristol Eastern High School. Laureen ensures that every visit is seamless for patients who choose Tiny Teeth as their dental home. She takes pride in seeing familiar faces return and enjoys watching families become regular patients. In her free time, Laureen enjoys playing softball and volleyball, as well as visiting the beach with her husband, daughter, and rescue dog Chico.",
                    image: "assets/staff/Laureen.jpg",
                },
                {
                    name: "Michelle",
                    body: "Michelle is a Dental Hygienist and has been a part of the Tiny Teeth team since 2014. She truly loves what she does. She is always looking to create a positive dental experience for both the parent and child. She graduated from Tunxis Dental Hygiene program and received her Bachelor’s degree from CCSU. Outside of work she enjoys reading, boating, and snowmobiling.",
                    image: "assets/staff/Michelle.jpg",
                },
                {
                    name: "Hilary",
                    body: "Hilary is a Dental Hygienist and has been working in Pediatrics her entire career. She joined our practice in August of 2020. Hilary graduated from the University of New Haven in 2011 with a Bachelor’s degree. She traveled to Romania as part of her internship and spent two weeks at an orphanage providing dental care to underserved children. In her spare time, Hilary enjoys spending time with her family and friends. She resides with her husband, gaughter and their two miniature Schnauzers.",
                    image: "assets/staff/Hilary.jpg",
                },
                {
                    name: "Nicole",
                    body: "Nicole joined us in February of 2022 as a Dental Hygienist. She graduated from Fones School of Dental Hygiene in 2017 with a Bachelor’s degree. Nicole has always had a passion for teaching and working with children. She also has worked as a clinical instructor for a dental hygiene program. In her spare time, she loves to travel, explore the outdoors and spend time with her family and friends.",
                    image: "assets/staff/Nicole.jpg",
                },
                {
                    name: "Brianna",
                    body: "Bri is a Dental Assistant at Tiny Teeth who joined the team in 2022. She graduated from Tunxis in 2014 and has since earned certifications in expanded functions, with extensive experience and training in dentistry, particularly in pediatrics. Bri enjoys making dental visits easy and fun for her patients, and finds it rewarding to transform their negative perceptions of dentistry into positive ones. Outside of work, she enjoys going to the beach, playing soccer, snowboarding in Vermont, and spending time with her German Shepherd.",
                    image: "assets/staff/Brianna.jpg",
                },
                {
                    name: "Roxy",
                    body: "Roxy joined the team in August 2022 as a Dental Assistant and Operating Room Coordinator. She graduated from Dental Assistant School in 2010. Roxy not only assists with procedures but also makes sure children feel comfortable during their appointments by explaining procedures and interacting with them. In her role as OR coordinator, Roxy meets with parents before surgery to go over procedures and instructions and coordinates the entire process with the hospital to ensure a successful outcome. She speaks both Spanish and English.",
                    image: "assets/staff/Roxy.jpg",
                },
                {
                    name: "Amanda",
                    body: "Amanda is the front desk receptionist at Tiny Teeth, having joined the team in 2021. She studied at Branford Hall Career Institute in Southington, Connecticut, and has been working in clinical roles for 14 years, with a particular fondness for working with children and parents. Amanda enjoys exceeding expectations and meeting the needs of both children and parents when they visit. Outside of work, she enjoys going on adventures with her own children, cooking and baking, streaming movies, and reading.",
                    image: "assets/staff/Amanda.jpg",
                },
                {
                    name: "Patricia",
                    body: "Paty works in the Front Desk. She has been in the pediatric dental field since 2018. She finds it very rewarding to work with children. She speaks Spanish and English fluently. When she is not at the office, she loves spending time with her family, cooking and reading. She is grateful for her job and looks forward to meeting all of you in the near future.",
                    image: "assets/staff/Patricia.jpg",
                },
                {
                    name: "Nutella",
                    body: "Nutella is a toy poodle. She is our Emotional Support Dog. Born in November of 2019, she came to Dr. Paty’s life at the start of the Covid pandemic. When she is in the office, she sits with the most anxious and apprehensive patients to help them relax during some dental procedures. She is hypoallergenic and absolutely loves children.",
                    image: "assets/staff/Nutela.jpg",
                },
            ],
        };
    },
};
</script>
<template>
    <section
        class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
    >
        <div v-for="(item, index) in items" :key="index">
            <TSCard :item="item" />
        </div>
    </section>
    <div class="card-one py-8">
        <div class="container m-auto text-gray-600">
            <div class="grid lg:grid-cols-1">
                <div
                    class="rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
                >
                    <div class="lg:flex items-center">
                        <img
                            src="/assets/tour/image11.jpg"
                            alt=""
                            class="lg:h-full w-full lg:w-5/12 object-cover object-top rounded-lg transform scale-90"
                        />
                        <div class="lg:pr-8 p-4">
                            <div class="space-y-2">
                                <div class="space-y-4">
                                    <h4
                                        class="DoctorSoosBold font-bold text-3xl text-sky-600 pt-4 px-2"
                                    >
                                        Dawn
                                    </h4>
                                    <p
                                        class="text-gray-700 mt-2 text-justify px-2"
                                    >
                                        Dawn's career in dental began more than
                                        two decades ago when she started as a
                                        dental assistant! At Tiny Teeth
                                        Pediatric Dentistry, she is the office
                                        AR Specialist/Insurance Coordinator. She
                                        really enjoys her position here because
                                        she’s able to help patients better
                                        understand their insurance policies. She
                                        also loves working alongside such
                                        excellent dentists and staff members!
                                        Outside of work, you can find her
                                        spending time with her son, friends,
                                        family, and traveling to SC!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
