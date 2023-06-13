import "./restaurants.css";

import { MapConfiguration } from "./MapConfiguration/MapConfiguration";
import { SwiperRestaurantLocation } from "./SwiperRestaurantLocation/SwiperRestaurantLocation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { DescriptionRestauranLocation } from "./DescriptionRestauranLocation/DescriptionRestauranLocation";

export const Restaurantes = () => {
  return (
    <>
      <section className="relative mx-auto max-w-5xl  z-[1]">
        <MapConfiguration />
      </section>
      <div
        className="h-40 bg-green-400 relative  "
        onClick={() => {
          alert("ss");
        }}
      >
        <div className="max-w-4xl h-full mx-auto ">
          <SwiperRestaurantLocation />
        </div>
        <div
          className="absolute bottom-[2rem] left-0 right-0 z-20"
          style={{ zIndex: "20" }}
        >
          {/* <DescriptionRestauranLocation /> */}
        </div>
      </div>
      <button
        onClick={() => {
          alert("sssssss");
        }}
        type="button"
        className=" bg-transparent fixed top-0 right-0 left-0 bottom-0 z-10 "
      />
    </>
  );
};
