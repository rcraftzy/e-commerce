import { useEffect, useState } from "react";
import {
  AdditionIcon,
  DropItemIcon,
  ShoppingBag,
  SubstractIcon,
} from "../Icons";
import { Modal } from "@mui/material";
import { ProductItem } from "./ProductItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { subtotalProduct } from "../../redux/slices/menuProductSelectedCartSlice";

export const MenuShoppingCard = () => {
  const dispatch = useDispatch();
  const { cart, subtotal } = useSelector(
    (state) => state.menuProductSelectedCart
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(subtotalProduct());
  }, [dispatch, open]);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex flex-col justify-center px-9 gap-0"
      >
        <div className="w-20 h-auto fill-white">
          <ShoppingBag />
        </div>
        <span className="text-center font-bold text-white leading-[16px]">
          Tu carrito
          <br /> de compra
        </span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-light-ivory px-10 pt-10 w-[340px] mx-auto absolute top-32 border-2 border-fire-red right-0">
            {cart?.map((item) => (
              <ProductItem product={item} key={item?.id} />
            ))}

            <footer className="flex gap-4 flex-col justify-center mb-3">
              <div className="flex justify-between mx-5 mt-5">
                <h4 className="text-chocolate-brown font-bold">Subtotal</h4>
                <span className="font-bold text-moss-green">$ {subtotal}</span>
              </div>
              <div className="flex justify-center">
                <button
                  className="text-chocolate-brown bg-vibrant-yellow px-11 py-4 text-lg font-bold"
                  type="submit"
                >
                  Paga aquí
                </button>
              </div>
              <div className="text-chocolate-brown text-xs">
                <p className="text-center mx-4">
                  *El envío y los impuestos se calcularán al finalizar la
                  compra.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </Modal>
    </div>
  );
};
