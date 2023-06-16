import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { RestauranItemLocation } from "./RestauranItemLocation";

export const SwiperRestaurantLocation = ({ map }) => {
  const restaurantLocation = [
    {
      geocode: [-2.7407747, -78.8494491],
      name: "Emilio Abad",
      direction: "CARRERA D.D No. 139 07 Local 305 ",
    },
    {
      geocode: [-2.7446874, -78.8483158],
      name: "Hotel",
      direction: "CARRERA D.D No. 139 07 Local 305 ",
    },
    {
      geocode: [-2.7419321, -78.8476359],
      name: "cafe",
      direction: "CARRERA D.D No. 139 07 Local 305 ",
    },
    {
      geocode: [-2.7407747, -78.8494491],
      name: "Emilio Abad",
      direction: "CARRERA D.D No. 139 07 Local 305 ",
    },
    {
      geocode: [-2.7446874, -78.8483158],
      name: "Hotel",
      direction: "CARRERA D.D No. 139 07 Local 305 ",
    },
    {
      geocode: [-2.7419321, -78.8476359],
      name: "cafe",
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
              map={map}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
