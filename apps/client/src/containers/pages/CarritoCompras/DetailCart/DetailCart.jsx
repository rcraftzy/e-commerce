import React from "react";

export const DetailCart = () => {
  return (
    <div className="">
      <div>
        {[1, 2, 3, 4, 5].map((cart, index) => (
          <div className="flex" key={index}>
            <div className="flex-1 flex  flex-col items-center relative">
              <h4 className="bg-chocolate-brown  rounded-full w-5 h-5 font-bold text-white flex items-center justify-center absolute -top-2  ">
                2
              </h4>
              <div>
                <img
                  className="w-20 h-20 object-cover"
                  src="https://www.infobae.com/new-resizer/xHORBTTOvi76_TX7OOanBUblR-0=/1200x900/filters:format(webp):quality(85)//arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FJKXKQKMMJBV7KQ7XQ3YNFO7LU.jpg"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2>Hamburgues Western</h2>
              <h2>Compo</h2>
              <h2>Descripción</h2>
              <h3>Adiciones:</h3>
              <span>Adiciones</span>
            </div>
            <div className="flex-1">
              <span>$57.600</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button>Código de descuento</button>
        <button>Canjear</button>
      </div>
      <div>
        <div className="flex">
          <span className="flex-1">Subtotal</span>
          <span className="flex-1  flex justify-end">$ 81.900</span>
        </div>
        <div className="flex">
          <span className="flex-1">Envíos</span>
          <span className="flex-1 flex justify-end">$ 2.500</span>
        </div>
        <div className="flex">
          <span className="flex-1">Total</span>
          <span className="flex-1 flex justify-end">$ 84.400 COP</span>
        </div>
      </div>
    </div>
  );
};
