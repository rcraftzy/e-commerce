import React, { useState } from "react";
import { Information } from "./Information/Information";
import { OrderConfirmation } from "./OrderConfirmation/OrderConfirmation";
import { DetailCart } from "./DetailCart/DetailCart";

export const CarritoCompras = () => {
  const [option, setOption] = useState(true);
  const handleInformation = () => {
    setOption(true);
  };
  const handleOrderConfirmation = () => {
    setOption(false);
  };
  return (
    <div>
      <header className="  flex justify-center  border-b-4 border-yellow-300">
        <img className="w-36 sm:w-60" src="/assets/LOGO-PW.png" alt="Logo" />
      </header>
      <div className="flex max-w-6xl mx-auto ">
        <div className="flex-1 bg-fire-red px-4 py-5 text-white">
          <h1>Hamburguesas del Rodeo</h1>
          <div className="flex gap-2">
            <button type="button" onClick={handleInformation}>
              Información
            </button>
            <span> &gt; </span>
            <button type="button" onClick={handleOrderConfirmation}>
              Confirmación del pedido
            </button>
          </div>

          {option ? <Information /> : <OrderConfirmation />}
        </div>
        <div className="flex-1">
          <DetailCart />
        </div>
      </div>
    </div>
  );
};
