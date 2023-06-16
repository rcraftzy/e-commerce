import React from "react";
import { ButtomMap } from "../Buttom/ButtomMap";
import { EstrellaIcon } from "../../../../components/Icons";
import { useState } from "react";
import { useEffect } from "react";

const restaurantLocation = [
  {
    id: 1,
    name: "Palatino",
    direction: "CARRERA P No. 139 07 Local 305 ",
  },
  {
    id: 2,
    name: "C.C. PORTAL",
    direction: "Calle C.C #100 - 52  Local 3044",
  },
  {
    id: 3,
    name: "A.A Palatino",
    direction: "CARRERA A.A No. 139 07 Local 305 ",
  },
  {
    id: 4,
    name: "B.B",
    direction: "CARRERA B.B No. 139 07 Local 305 ",
  },
  {
    id: 5,
    name: "C.C",
    direction: "CARRERA C.C No. 139 07 Local 305 ",
  },
  {
    id: 6,
    name: "D.D",
    direction: "CARRERA D.D No. 139 07 Local 305 ",
  },
];

export const MovileDescriptionRestaurantLocation = () => {
  const [valueLocation, setValueLocation] = useState({});
  const changeRestaurantLocation = (e) => {
    const id = e.target.value;
    setValueLocation(restaurantLocation?.find((item) => item?.id == id));
  };
  useEffect(() => {
    setValueLocation(restaurantLocation?.[0]);
  }, []);

  return (
    <div className="h-[25rem] bg-moss-green relative z-20 sm:hidden block ">
      <div className="absolute  -top-16 left-0 right-0 ">
        <div className="max-w-max mx-auto pb-2 ">
          <select
            onChange={(e) => changeRestaurantLocation(e)}
            className=" border font-bold  text-sm rounded-lg  block w-full p-2.5 bg-fire-red border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            defaultValue={restaurantLocation?.[0].id}
            value={valueLocation.id}
          >
            {restaurantLocation?.map((location) => (
              <option key={location?.id} value={location.id}>
                {location?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <div className="w-10 bg-intense-orange mr-3 rounded-tr-[2rem] "></div>
          <div className="bg-fire-red text-white flex-1 rounded-t-[2rem] flex flex-col items-center max-h-max py-8">
            <div className="w-10  ">
              <EstrellaIcon />
            </div>
            <h1>{valueLocation?.name}</h1>
          </div>
          <div className="bg-intense-orange w-10 ml-3 rounded-tl-[2rem]"></div>
        </div>
        <aside className="text-white bg-fire-red flex flex-col items-center py-4  ">
          <div className="max-w-max flex flex-col   ">
            <h1 className="font-ifc-insane-rodeo-bold text-3xl">PALATINO</h1>
            <h3 className="">
              Carrera 7 No. 139 07 <br /> Local 305
            </h3>
            <span className="pt-2">De domingo a domingo</span>
            <span>11.30 am - 8:30 pm</span>
            <div className="flex flex-col gap-2 pt-2">
              <ButtomMap title={"Ir con Google"} />
              <ButtomMap title={"Ir con Google"} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
