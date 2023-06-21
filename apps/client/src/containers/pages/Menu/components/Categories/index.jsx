import React, { useEffect, useState } from "react";
import { CategoryItem } from "./CategoryItem";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useDispatch } from "react-redux";
import { addSelectedCategory } from "../../../../../redux/slices/menuProductSelectedCartSlice";

import "swiper/css/navigation";

const categories = [
  {
    id: 1,
    name: "Combos",
    img: "/assets/menu/ADICIONAL.png",
  },
  {
    id: 2,
    name: "Promociones",
    img: "/assets/menu/HAMBURGUESAS.png",
  },
  {
    id: 3,
    name: "Hamburguesas",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 4,
    name: "Entrada, Parrilla y Hot Dog",
    img: "/assets/menu/ADICIONAL.png",
  },
  {
    id: 5,
    name: "Linea Verde",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 6,
    name: "Menú infantil",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 7,
    name: "Bebidas, Adicionales y mas",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 8,
    name: "Menú infantil",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 9,
    name: "Bebidas, Adicionales y mas",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 10,
    name: "Bebidas, Adicionales y mas",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 11,
    name: "Menú infantil",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 12,
    name: "Bebidas, Adicionales y mas",
    img: "/assets/menu/PROMOCIONES.png",
  },
];

export const Categories = () => {
  const dispatch = useDispatch();
  const { currentCategory, currentPositionSwiper } = useSelector(
    (state) => state?.menuProductSelectedCart
  );
  useEffect(() => {
    if (Object.keys(currentCategory).length === 0) {
      dispatch(addSelectedCategory({ category: categories?.[0] }));
    }
  }, [currentCategory, dispatch]);
  return (
    <div className=" -mb-16">
      <Swiper
        initialSlide={currentPositionSwiper}
        slidesPerView={7}
        navigation={true}
        spaceBetween={20}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 7,
          },
          640: {
            slidesPerView: 5,
          },
          400: {
            slidesPerView: 2,
            height: "10rem",
            background: "red",
          },
          0: {
            slidesPerView: 2,
            height: "10rem",
            background: "red",
          },
        }}
      >
        {categories?.map((category, index) => (
          <SwiperSlide key={category?.id} style={{ background: "transparent" }}>
            <CategoryItem
              category={category}
              key={category?.id}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
