import React from "react";
import { BackgroundImage } from "../../../../components";

export const HomeItemInformation = () => {
  return (
    <div className="">
      <BackgroundImage
        className={"bg-auto"}
        image={"/assets/banners/Banner-4.png"}
      >
        <section className="pt-80 px-20 pb-16 flex flex-col">
          <h3 className="flex justify-center z-10 sm:justify-start text-center font-ifc-insane-rodeo-bold text-3xl sm:text-[42px] md:text-5xl mb-2 text-light-gold drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">
            Nos encargamos de tu
          </h3>
          <div className="inline-flex items-center justify-center sm:justify-start h-11 mb-6">
            <span className="font-ifc-insane-rodeo-bold text-8xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)] mb-4">
              EVENTO
            </span>
          </div>
          <span className="flex justify-center sm:justify-start z-10 mb-14 sm:mb-5">
            <a className="text-chocolate-brown bg-vibrant-yellow px-11 py-4 text-sm font-bold">
              Consulta aqui
            </a>
          </span>
        </section>
      </BackgroundImage>
    </div>
  );
};
