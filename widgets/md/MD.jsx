import { Navigation } from "swiper/modules";
import Title from "./ui/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import MDCard from "./ui/MDCard";
import { constants } from "./data/constant";

const MD = () => {
  return (
    <section className="w-full max-w-screen-xl m-auto pt-10">
      <Title />
      <Swiper
        spaceBetween={50}
        modules={[Navigation]}
        slidesPerView={4}
        navigation={true}
        loop={true}
      >
        {constants.mdCards.map((v, i) => (
          <SwiperSlide key={i}>
            <MDCard {...v} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MD;
