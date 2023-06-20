import React, { useEffect, useState } from "react";
import { Information } from "./Information/Information";
import { OrderConfirmation } from "./OrderConfirmation/OrderConfirmation";
import { DetailCart } from "./DetailCart/DetailCart";
import { Footer } from "../../../components";
import { DetailCartMovile } from "./DetailCartMovile/DetailCartMovile";
import { DetailFinishOrder } from "./DetailFinishOrder/DetailFinishOrder";

export const CarritoCompras = () => {
  const [option, setOption] = useState(true);
  const [activeDetailMovile, setActiveDetailMovile] = useState(false);
  const [finishOrder, setFinishOrder] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [option]);
  const handleDetailCartMovile = () => {
    setActiveDetailMovile(!activeDetailMovile);
  };
  return (
    <div className="">
      <header className=" fixed w-full bg-white   flex justify-center  border-b-8 border-golden-yellow  h-24 z-40">
        <img
          className="w-40 sm:w-60 h-full  object-cover scale-75 "
          src="/assets/LOGO-PW.png"
          alt="Logo"
        />
        <div
          className={`md:hidden block absolute right-0 top-32   text-black   rounded-lg bg-white font-tahoma font-bold text-sm ${
            activeDetailMovile ? "sm:w-96 w-full" : "w-40"
          } `}
        >
          <div>
            <button
              type="button"
              onClick={handleDetailCartMovile}
              className="bg-moss-green w-full h-12 "
            >
              <h2 className="text-white">Tu pedido final</h2>
            </button>
          </div>

          {activeDetailMovile && (
            <div>
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={handleDetailCartMovile}
              ></div>
              <div className="relative bg-white ">
                <DetailCartMovile />
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="pt-24">
        <div className="flex md:max-w-6xl sm:max-w-2xl w-full mx-auto ">
          {finishOrder ? (
            <div className="flex-1 bg-fire-red px-4  py-5 text-white">
              <DetailFinishOrder />
            </div>
          ) : (
            <div className="flex-1 bg-fire-red px-4 py-5 text-white ">
              <h1 className="font-ifc-insane-rodeo-bold text-3xl">
                Hamburguesas del Rodeo
              </h1>
              <div className="flex gap-2 mb-5 font-tahoma text-sm">
                <h3 className={`${option ? "font-bold" : ""}`}>Información</h3>
                <span> &gt; </span>
                <h3 className={`${option ? "" : "font-bold"}`}>
                  Confirmación del pedido
                </h3>
              </div>

              {option ? (
                <Information setOption={setOption} />
              ) : (
                <OrderConfirmation
                  setOption={setOption}
                  setFinishOrder={setFinishOrder}
                />
              )}
            </div>
          )}

          <div className="md:flex-1  hidden md:block  sticky top-24 h-min">
            <DetailCart />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
