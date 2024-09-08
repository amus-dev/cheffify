import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { dataCarouselsShop } from "@/config/data.carousels";

const CarouselProducts = () => {
  return (
    <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
      {dataCarouselsShop.map(
        ({
          id,
          title,
          description,
          image,
          icon,
          buttonText,
          link,
          color,
          buttonBackground,
          buttonBackgroundHover,
          buttonTextColor,
          buttonTextColorHover,
        }) => (
          <SwiperSlide key={id}>
            <div
              className="flex flex-col w-full bg-center bg-cover p-10 rounded-2xl"
              style={{ backgroundImage: `url(${image})` }}
            >
              <h1
                className={`${color} font-black text-[40px] leading-[40px] flex items-end gap-3`}
              >
                {title}
                <img src={icon} className="size-10" />
              </h1>
              <p
                className={`${color} text-lg font-medium text-balance max-w-[700px] mt-4`}
              >
                {description}
              </p>
              <a
                href={link}
                className={`${buttonBackground} ${buttonTextColor} font-bold w-fit px-4 py-1 rounded-full text-[15px] text-center hover:${buttonBackgroundHover} hover:${buttonTextColorHover} transition-all duration-500 mt-4`}
              >
                {buttonText}
              </a>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default CarouselProducts;
