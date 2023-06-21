import React from "react";
import { ProductItem } from "./ProductItem";
const items = [
  {
    id: 1,
    name: "Hamburguesa Del Rodeo",
    image: "/assets/menu/HAMBURGUESAS.png",
    price: (10.0).toFixed(3),
  },
  {
    id: 2,
    name: "Hamburguesa Ranchera",
    image: "/assets/menu/COMBOS.png",
    price: (20.0).toFixed(3),
  },
  {
    id: 3,
    name: "Hamburguesa Polagona",
    image: "/assets/menu/ADICIONAL.png",
    price: (40.0).toFixed(3),
  },
  {
    id: 4,
    name: "Hamburguesa Criolla",
    image: "/assets/menu/HAMBURGUESAS.png",
    price: (4.0).toFixed(3),
  },
  {
    id: 5,
    name: "Hamburguesa Doble Carne",
    image: "/assets/menu/HAMBURGUESAS.png",
  },
  {
    id: 6,
    name: "Hamburguesa Westen",
  },
  {
    id: 7,
    name: "Hamburguesa Mexicana",
  },
  {
    id: 8,
    name: "Hamburguesa Jumbo",
  },
  {
    id: 9,
    name: "Hamburguesa Doble Jumbo",
  },
  {
    id: 10,
    name: "Hamburguesa Mega Rodeo",
  },
];
export const Products = () => {
  return (
    <section>
      <header className="flex">
        <h2 className="font-ifc-insane-rodeo-bold text-fire-red text-5xl">
          Hamburguesas de carne - Carne y mas
        </h2>
      </header>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {items.map((item) => (
          <ProductItem product={item} key={item?.id} />
        ))}
      </section>
    </section>
  );
};
