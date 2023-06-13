import React from "react";

export const RestauranItemLocation = ({ itemRestaurantLocation }) => {
  return (
    <div className="flex flex-col w-full h-44  ">
      <div className="mt-[2rem] relative rounded-t-[2rem] bg-intense-orange h-full ">
        <div className=" font-ifc-insane-rodeo-bold text-9xl text-white h-10 absolute   w-full bg-blue-500   -top-10">
          -
        </div>
        <div className=" mt-14 px-2">
          <h2 className="text-white">{itemRestaurantLocation.name}</h2>
          <span className="text-white text-sm">
            {itemRestaurantLocation.direction}
          </span>
        </div>
      </div>
    </div>
  );
};
