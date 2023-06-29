import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { RestauranItemLocation } from "./RestauranItemLocation";

export const SwiperRestaurantLocation = ({ map }) => {
  const restaurantLocation = [
    {
      geocode: [-2.7407747, -78.8494491],
      name: "Patalino",
      direction: "CARRERA 7 No. 139 07 Local 305",
    },
    {
      geocode: [-2.7446874, -78.8483158],
      name: "Centro",
      direction: "CARRERA 7 No. 13 47",
    },
    {
      geocode: [-2.7419321, -78.8476359],
      name: "Castellana",
      direction: "CRA 47 No. 94 A 56",
    },
    {
      geocode: [-2.7407747, -78.8494491],
      name: "C.C Portal 80",
      direction: "Calle 80 #100 - 52 Local 3044",
    },
  ];
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        scrollbar={{
          dragSize: 100,
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
              map={map}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
