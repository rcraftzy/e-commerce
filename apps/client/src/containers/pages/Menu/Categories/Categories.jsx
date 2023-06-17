import React from "react";
import { CategoryItem } from "./CategoryItem";

const categories = [
  {
    id: 1,
    name: "Combos",
  },
  {
    id: 2,
    name: "Promociones",
  },
  {
    id: 3,
    name: "Hamburguesas",
  },
  {
    id: 4,
    name: "Entrada, Parrilla y Hot Dog",
  },
  {
    id: 5,
    name: "Linea Verde",
  },
  {
    id: 6,
    name: "Menú infantil",
  },
  {
    id: 7,
    name: "Bebidas, Adicionales y mas",
  },
];

export const Categories = () => {
  return (
    <div className="flex gap-4 ">
      {categories?.map((category) => (
        <div
          className="w-28 h-full border-b-fire-red border-b-8 "
          key={category?.id}
        >
          <CategoryItem category={category} />
        </div>
      ))}
      <div>
        <div></div>
        <span className="text-center text-fire-red text-xl font-bold leading-[0.5px]">
          Promociones
        </span>
      </div>
    </div>
  );
};
