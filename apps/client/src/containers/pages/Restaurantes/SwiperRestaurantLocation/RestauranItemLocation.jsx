import React from "react";
import Modal from "@mui/material/Modal";

export const RestauranItemLocation = ({ itemRestaurant }) => {
  return (
    <div className="flex flex-col w-full h-auto  ">
      <div className="mt-[2rem] relative rounded-t-[2rem] bg-intense-orange h-full ">
        <div className=" font-ifc-insane-rodeo-bold text-9xl text-white h-10 absolute   w-full bg-blue-500   -top-10">
          -
        </div>
        <div className=" mt-16">
          <h2 className="">{itemRestaurant.name}</h2>
          <span>{itemRestaurant.direction}</span>
        </div>
      </div>
    </div>
  );
};
