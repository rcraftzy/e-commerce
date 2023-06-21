import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeItemInformation } from "./HomeItemInformation";
export const SwiperHomeInformation = () => {
  return (
    <section className="mx-auto max-w-5xl sm:-mb-14 -mb-[6rem]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mt-6"
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide key={index} style={{ background: "transparent" }}>
            <HomeItemInformation />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
