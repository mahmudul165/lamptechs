// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from "./testimonialCard";

export default () => {
  return (
    <Swiper
    spaceBetween={200}
    loop={true}
    slidesPerView={1}
    speed={300}
    effect={"slide"}
    centeredSlides={true}
    autoHeight={true}
    autoplay={1000}
    loopAdditionalSlides={4}
    onSlideChange={() => {console.log('slide change');}}
    onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
            <TestimonialCard 
                author="Annie Copeland"
                authorJob="Dentist"
                authorComment="A web app is the most valuable business resource we have EVER invested in. Thank you for making it painless, pleasant and most of all hassle free! It's really wonderful. I was amazed at the quality of web apps."
                authorImage="/Annie.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialCard 
                author="Philip Ruiz"
                authorJob="Restaurant Owner"
                authorComment="I would like to personally thank you for your outstanding product. We can't understand how we've been living without a web app. The outcome has completely surpassed our expectations. Really good."
                authorImage="/Philip.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialCard 
                author="Isabella Steele"
                authorJob="Estate Agent"
                authorComment="I STRONGLY recommend a web app to EVERYONE interested in running a successful online business!"
                authorImage="/Isabella.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <TestimonialCard 
                author="Jack Pridgeon"
                authorJob="Mechanic"
                authorComment="The service was excellent. I would also like to say thank you to all your staff. The outcome is worth much more than I paid. No matter where you go, a web app is the coolest, most happening thing around!"
                authorImage="/Jack.jpg" />
        </SwiperSlide>
    </Swiper>
  );
};