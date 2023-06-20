import React, { useState } from "react";
import { CategoryItem } from "./CategoryItem";
import { useSelector } from "react-redux";

const categories = [
  {
    id: 1,
    name: "Combos",
    img: "/assets/menu/ADICIONAL.png",
  },
  {
    id: 2,
    name: "Promociones",
    img: "/assets/menu/HAMBURGUESAS.png",
  },
  {
    id: 3,
    name: "Hamburguesas",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 4,
    name: "Entrada, Parrilla y Hot Dog",
    img: "/assets/menu/ADICIONAL.png",
  },
  {
    id: 5,
    name: "Linea Verde",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 6,
    name: "Menú infantil",
    img: "/assets/menu/PROMOCIONES.png",
  },
  {
    id: 7,
    name: "Bebidas, Adicionales y mas",
    img: "/assets/menu/PROMOCIONES.png",
  },
];

export const Categories = () => {
  return (
    <div className="flex gap-4 justify-between mt-2">
      {categories?.map((category) => (
        <CategoryItem category={category} key={category?.id} />
      ))}
    </div>
  );
};
