import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { RestauranItemLocation } from "./RestauranItemLocation";

export const SwiperRestaurantLocation = () => {
  const restaurantLocation = [
    {
      name: "Palatino",
      direction: "CARRERA P No. 139 07 Local 305 ",
    },
    {
      name: "C.C. PORTAL",
      direction: "Calle C.C #100 - 52  Local 3044",
    },
    {
      name: "A.A Palatino",
      direction: "CARRERA A.A No. 139 07 Local 305 ",
    },
    {
      name: "B.B",
      direction: "CARRERA B.B No. 139 07 Local 305 ",
    },
    {
      name: "C.C",
      direction: "CARRERA C.C No. 139 07 Local 305 ",
    },
    {
      name: "D.D",
      direction: "CARRERA D.D No. 139 07 Local 305 ",
    },
  ];
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        scrollbar={{
          dragSize: 400,
        }}
        modules={[Scrollbar]}
        className="swiper-container"
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {restaurantLocation.map((itemRestaurantLocation, index) => (
          <SwiperSlide key={index} style={{ background: "transparent" }}>
            <RestauranItemLocation
              itemRestaurantLocation={itemRestaurantLocation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
