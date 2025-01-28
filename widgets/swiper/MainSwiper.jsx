"use client";

import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { constants } from "./data/constant";

const MainSwiper = () => {
  return (
    <section>
      <Swiper
        modules={[Scrollbar]}
        slidesPerView={1}
        loop={true}
        scrollbar={{ draggable: true }}
      >
        {constants.images.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={v} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainSwiper;
