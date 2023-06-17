import React from "react";
import { AdditionIcon, DropItemIcon, SubstractIcon } from "../Icons";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
} from "../../redux/slices/menuProductSelectedCartSlice";

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementItem({ amount: product?.amount + 1, product }));
  };
  const handleDecrement = () => {
    dispatch(decrementItem({ amount: product?.amount - 1, product }));
  };
  const handleRemove = () => {
    dispatch(decrementItem({ amount: 0, product }));
  };
  return (
    <div className="relative flex gap-4">
      <div className="absolute right-0">
        <button className="w-4" onClick={handleRemove}>
          <DropItemIcon />
        </button>
      </div>
      <div className="w-1/3">
        <img src={product?.image} alt="foto" />
      </div>

      <div className="w-2/3 flex flex-col gap-2  mr-[3px]">
        <h3 className="text-lg font-bold text-chocolate-brown leading-[15px] mt-[0.5px]">
          {product?.name}
        </h3>
        <span className="uppercase text-xs text-intense-orange font-bold">
          SIN COMBO
        </span>
        <div>
          <h4 className="font-bold text-chocolate-brown text-sm leading-[5px]">
            Adiciones:
          </h4>
          <span className="text-sm text-chocolate-brown">Tocineta</span>
        </div>
        <div>
          <h4 className="font-bold text-chocolate-brown text-sm leading-[5px]">
            Acompañamiento:
          </h4>
          <span className="text-sm text-chocolate-brown">Papa casquillo</span>
        </div>
        <div className="leading-[15px]">
          <h4 className="font-bold text-chocolate-brown text-sm leading-[5px]">
            Bebida:
          </h4>
          <span className="text-sm text-chocolate-brown">Hit de lulo</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="w-4" onClick={handleIncrement}>
            <AdditionIcon />
          </button>
          <span className="text-chocolate-brown font-bold ">
            {product?.amount}
          </span>
          <button className="w-4" onClick={handleDecrement}>
            <SubstractIcon />
          </button>
        </div>
        <span className="text-moss-green font-bold">$ {product?.price}</span>
      </div>
    </div>
  );
};
