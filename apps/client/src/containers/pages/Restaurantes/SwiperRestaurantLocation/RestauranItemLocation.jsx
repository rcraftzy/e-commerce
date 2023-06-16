import React from "react";
import { useDispatch } from "react-redux";
import { addRestaurantLocation } from "../../../../redux/slices/restaurantMapLocationSlice";

export const RestauranItemLocation = ({ itemRestaurantLocation }) => {
  const dispatch = useDispatch();
  const handleDescriptionRestauranLocation = () => {
    dispatch(addRestaurantLocation(itemRestaurantLocation));
  };
  return (
    <button
      onClick={handleDescriptionRestauranLocation}
      type="button"
      className="flex flex-col w-full h-44  cursor-pointer "
    >
      <div className="mt-[2rem] relative rounded-t-[2rem] bg-intense-orange h-full w-full">
        <div className=" font-ifc-insane-rodeo-bold text-9xl text-white h-10 absolute   w-full bg-blue-500   -top-10">
          -
        </div>

        <div className=" mt-12 px-2 ">
          <h2 className="text-white font-ifc-insane-rodeo-bold md:text-3xl text-2xl">
            {itemRestaurantLocation?.name}
          </h2>
          <span className="text-white md:text-xl text-lg">
            {itemRestaurantLocation?.direction}
          </span>
        </div>
      </div>
    </button>
  );
};
