import "./restaurants.css";

import { MapConfiguration } from "./MapConfiguration/MapConfiguration";
import { SwiperRestaurantLocation } from "./SwiperRestaurantLocation/SwiperRestaurantLocation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { DescriptionRestauranLocation } from "./DescriptionRestauranLocation/DescriptionRestauranLocation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeDescriptionRestauranLocation } from "../../../redux/slices/restaurantMapLocationSlice";
import { EstrellaIcon, HamburguesaIcon } from "../../../components/Icons";
import { ButtomMap } from "./Buttom/ButtomMap";
import { MovileDescriptionRestaurantLocation } from "./MovileDescriptionRestaurantLocation/MovileDescriptionRestaurantLocation";

export const Restaurantes = () => {
  const { isActiveDescriptionRestauranLocation } = useSelector(
    (state) => state?.restaurantMapLocation
  );

  return (
    <>
      <section className=" mx-auto max-w-5xl  z-[10] relative h-96">
        <MapConfiguration />
      </section>
      {/* MODO TABLE Y WEB */}
      <div
        className={`md:h-40  bg-moss-green relative z-20 hidden sm:block ${
          isActiveDescriptionRestauranLocation ? "h-96" : "h-max"
        }`}
      >
        <div
          className={`md:max-w-4xl sm:max-w-xl max-w-sm h-full mx-auto  z-30  ${
            isActiveDescriptionRestauranLocation && "hidden"
          }`}
        >
          <SwiperRestaurantLocation />
        </div>
        <div className="absolute bottom-[2rem] left-0 right-0  ">
          {isActiveDescriptionRestauranLocation && (
            <DescriptionRestauranLocation />
          )}
        </div>
      </div>

      {/* MODO CELULAR */}
      <MovileDescriptionRestaurantLocation />
    </>
  );
};
