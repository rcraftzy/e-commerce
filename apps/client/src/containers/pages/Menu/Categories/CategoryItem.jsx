import React from "react";

export const CategoryItem = ({ category }) => {
  const handleSelected = () => {
    console.log(category);
  };
  return (
    <button type="button" onClick={handleSelected}>
      <div> </div>
      <span className="text-center text-fire-red text-xl font-bold leading-[0.5px]">
        {category?.name}
      </span>
    </button>
  );
};
