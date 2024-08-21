import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import Slide1 from "@/assets/images/img/slide1.webp";
import Slide2 from "@/assets/images/img/slide2.webp";

const CarouselHome = () => {
  return (
    <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
      <SwiperSlide>
        <img src={Slide1} alt="Primera imagen del carousel" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide2} alt="Segunda imagen del carousel" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselHome;
