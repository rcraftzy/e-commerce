import React from "react";

export const DescriptionRestauranLocation = () => {
  return (
    <div className="max-w-4xl h-full mx-auto ">
      <div className="bg-fire-red w-40 relative h-auto p-3 overflow-hidden text-center rounded-t-[2rem]">
        <div className="font-ifc-insane-rodeo-bold text-9xl text-white h-20 absolute -top-10 right-0 left-0 flex items-center flex-col">
          -
        </div>
        <div className="text-cyan-400 mt-12 text-2xl">PALATINO</div>
      </div>
      <div className="w-full bg-fire-red h-auto flex rounded-tr-[2rem] ">
        <div className="flex-1 flex flex-col gap-2 m-5">
          <h1 className="text-white text-3xl">PALATINO</h1>
          <h2 className="text-white">CARRERA 7 No. 139 07 Local 305</h2>
          <h2 className="text-white text-sm">
            De domingo a domingo <br />
            11:30 am - 8:30 pm
          </h2>
        </div>
        <div className="flex-1 flex gap-3  flex-col items-center justify-end pb-5 ">
          <button className="bg-green-600 text-white p-2 w-28">
            Ir con Google
          </button>
          <button className="bg-green-600 text-white p-2 w-28">
            Ir con Waze
          </button>
        </div>
        <div className="w-52 h-48 bg-yellow-50">
          <img
            className="h-full w-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9keDEQNpvr_2hJd-Nx5E48ChJk49ua5F7g&usqp=CAU"
            alt=""
          />
        </div>
        <div className="m-0 p-0 flex justify-center items-center px-5">
          <div className="font-ifc-insane-rodeo-bold text-7xl    text-white">
            -
          </div>
        </div>
      </div>
    </div>
  );
};
