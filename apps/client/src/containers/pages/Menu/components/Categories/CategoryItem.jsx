import React from "react";
import { useDispatch } from "react-redux";
import { addSelectedCategory } from "../../../../../redux/slices/menuProductSelectedCartSlice";
import { useSelector } from "react-redux";
export const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();
  const handleSelected = () => {
    dispatch(addSelectedCategory({ category }));
  };

  const { currentCategory } = useSelector(
    (state) => state.menuProductSelectedCart
  );

  return (
    <button
      type="button"
      onClick={handleSelected}
      className={` w-full ${
        currentCategory?.id === category.id
          ? "w-28  border-b-fire-red border-b-8 text-fire-red"
          : "w-28 pb-3  text-chocolate-brown "
      }`}
    >
      <div
        className={`h-28 w-full flex justify-center  ${
          currentCategory?.id === category?.id ? "" : " grayscale"
        }`}
      >
        <img src={category?.img} className="h-full w-full object-cover" />
      </div>
      <span className="text-center  text-xl font-bold leading-[0.5px]">
        {category?.name}
      </span>
    </button>
  );
};
