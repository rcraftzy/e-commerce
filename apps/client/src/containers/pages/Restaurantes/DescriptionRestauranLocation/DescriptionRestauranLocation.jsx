import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closeDescriptionRestauranLocation } from "../../../../redux/slices/restaurantMapLocationSlice";

export const DescriptionRestauranLocation = ({ map }) => {
  const dispatch = useDispatch();
  const { currentRestaurantLocation } = useSelector(
    (state) => state?.restaurantMapLocation
  );
  const handleClose = () => {
    dispatch(closeDescriptionRestauranLocation());
    map.setView([-2.7404828, -78.8507159], 15);
  };
  return (
    <div className="md:max-w-4xl max-w-xl h-full mx-auto relative bg-yellow-500 z-50 ">
      <div className="flex w-full md:w-40  justify-between  absolute md:-top-[20rem] -top-[28rem]">
        <div className="bg-fire-red w-44 relative h-[18rem] p-3  text-center rounded-t-[2rem]">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-0 -right-0 bg-intense-orange p-3  w-10 h-10 text-white z-10 rounded-tr-[2rem] hover:cursor-pointer hover:bg-golden-yellow"
          >
            X
          </button>
          <div className="font-ifc-insane-rodeo-bold text-9xl text-white h-20 absolute -top-9 right-0 left-0 flex items-center flex-col">
            -
          </div>
          <div className="text-light-ivory mt-12 md:text-3xl text-2xl mb-10 font-ifc-insane-rodeo-bold ">
            {currentRestaurantLocation?.name}
          </div>
        </div>
        <div className="bg-orange-500 w-44 relative h-[20rem] p-3 overflow-hidden text-center rounded-t-[2rem] md:hidden visible ">
          <div className="font-ifc-insane-rodeo-bold text-9xl text-white h-20 absolute -top-9 right-0 left-0 flex items-center flex-col">
            -
          </div>
          <div className=" mt-12 mb-10 font-ifc-insane-rodeo-bold ">
            <h2 className="md:text-3xl text-2xl text-light-ivory">
              {currentRestaurantLocation?.name}
            </h2>
            <h2 className="md:text-3xl text-lg  text-light-ivory">
              CARRERA 7 No. 139 07 Local 305
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full bg-fire-red  flex rounded-tr-[2rem] absolute md:max-h-72  max-h-96 bottom-0 md:flex-row flex-col">
        <div className="flex md:flex-1 max-h-64 overflow-y-auto">
          <div className="flex md:flex-row flex-1 flex-col ">
            <div className="flex-1 flex flex-col gap-2 m-5">
              <h1 className="text-white text-4xl font-ifc-insane-rodeo-bold">
                {currentRestaurantLocation?.name}
              </h1>
              <h2 className="text-white font-bold  ">
                {currentRestaurantLocation?.direction}
              </h2>
              <h2 className="text-white text-md font-bold">
                De domingo a domingo <br />
                11:30 am - 8:30 pm
              </h2>
            </div>
            <div className="flex-1 flex gap-3  flex-col items-center justify-end md:pb-5 ">
              <button className="bg-green-600 text-white md:px-2 md:py-3 px-1 py-2 w-36 font-bold text-[0.8rem]">
                Ir con Google
              </button>
              <button className="bg-green-600 text-white md:px-2 md:py-3 px-1 py-2 w-36 font-bold text-[0.8rem]">
                Ir con Waze
              </button>
            </div>
          </div>

          <div className="md:w-52 md:flex-none flex-1 md:h-48 max-h-96 bg-yellow-50 mt-16 md:mt-0">
            <img
              className="h-full w-full object-cover "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9keDEQNpvr_2hJd-Nx5E48ChJk49ua5F7g&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className=" flex justify-center items-center   md:w-16 w-full md:h-full h-[4rem]  relative">
          <div className="font-ifc-insane-rodeo-bold text-9xl    text-white  absolute   md:top-10 md:right-2 md:left-2  md:bottom-10  right-0 left-0 -bottom-6">
            <div className=" flex justify-center">-</div>
          </div>
        </div>
      </div>
    </div>
  );
};
