import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

//import "swiper/css/scrollbar";

//import "./styles.css";

// import required modules
import { Scrollbar } from "swiper";
import { RestauranItemLocation } from "./RestauranItemLocation";

export const SwiperRestaurantLocation = () => {
  const restaurantLocation = [
    {
      name: "Palatino",
      direction: "CARRERA 7 No. 139 07 Local 305 ",
    },
    {
      name: "C.C. PORTAL 80",
      direction: "Calle 80 #100 - 52  Local 3044",
    },
    {
      name: "Palatino",
      direction: "CARRERA 7 No. 139 07 Local 305 ",
    },
    {
      name: "Palatino",
      direction: "CARRERA 7 No. 139 07 Local 305 ",
    },
    {
      name: "Palatino",
      direction: "CARRERA 7 No. 139 07 Local 305 ",
    },
    {
      name: "Palatino",
      direction: "CARRERA 7 No. 139 07 Local 305 ",
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
      >
        {restaurantLocation.map((itemRestaurant, index) => (
          <SwiperSlide key={index} className="rounded-full  ">
            <RestauranItemLocation itemRestaurant={itemRestaurant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
