import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../../../redux/slices/menuProductSelectedCartSlice";
import { useSelector } from "react-redux";
import { SnackbarUtilities } from "../../../../../utilities";

const NOT_FOUNT_IMAGE_PRODUCT =
  "https://www.hostinet.com/formacion/wp-content/uploads/2017/01/agotado-chincheta.png";
export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.menuProductSelectedCart);
  const [amountSelected, setAmountSelected] = useState(Number(0));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const exitProduct = cart?.find((item) => item.id === product?.id);
    if (exitProduct) {
      setAmountSelected(exitProduct?.amount);
    } else {
      setAmountSelected(0);
    }
  }, [cart, product, open]);

  const handleAddToCart = () => {
    if (amountSelected !== 0) {
      SnackbarUtilities.success("Producto agregado");

      dispatch(addProductToCart({ product, amount: amountSelected }));
    }
  };
  const handleIncrement = () => {
    setAmountSelected(amountSelected + 1);
  };
  const handleDecrement = () => {
    if (amountSelected > 0) {
      setAmountSelected(amountSelected - 1);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`bg-red-50 flex flex-col items-center `}
      >
        <div
          className={`bg-[url('/assets/menu/FONDO_MENU_PRODUCTOS.jpg')] w-full h-24 flex justify-center overflow-hidden`}
        >
          <img
            src={
              product?.image == undefined
                ? NOT_FOUNT_IMAGE_PRODUCT
                : product?.image
            }
            className="h-full  object-cover hover:scale-105 transition-all duration-100"
          />
        </div>

        <h2 className="border-t-chocolate-brown border-t-8 text-lg font-bold text-chocolate-brown">
          {product?.name}
        </h2>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-light-ivory w-[620px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <div className="border-t-intense-orange mt-16 py-4 border-t-8">
            <h2 className="flex-2 text-4xl text-center font-ifc-insane-rodeo-bold text-fire-red">
              {product?.name}
            </h2>
          </div>
          <div className="flex gap-10 px-20">
            <div className="flex-1">
              <header className="flex justify-center">
                <div className="flex items-center gap-8">
                  <span className="text-intense-orange font-ifc-insane-rodeo-bold text-7xl">
                    -
                  </span>
                  <h4 className="font-bold text-chocolate-brown text-xl">
                    Ingredientes
                  </h4>
                  <span className="text-intense-orange font-ifc-insane-rodeo-bold text-7xl">
                    -
                  </span>
                </div>
              </header>
              <p className="text-center text-chocolate-brown text-sm">
                Una [1] hamburguesa con 2 carnes de 80g cada una, tocineta,
                champiñones, doble queso, lechuga y tomate.
              </p>
              <div className="flex justify-center">
                <span className="text-chocolate-brown">
                  Entrega: <span className="text-moss-green">60 minutos</span>
                </span>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-chocolate-brown text-4xl flex justify-center font-bold mb-4">
                $ {product?.price}
              </span>
              <div className="flex justify-between items-center">
                <span className="text-chocolate-brown font-bold">Cantidad</span>
                <div>
                  <button
                    className="text-lg px-2 border-fire-red border-2 rounded-full font-bold"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                  <span className="text-2xl"> {amountSelected} </span>
                  <button
                    className="text-lg px-2.5 border-fire-red border-2 rounded-full font-bold"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-chocolate-brown font-bold">
                  Adicionales
                </span>
                <span className="text-moss-green font-bold">+94.023</span>
              </div>
              <section>
                <span className=" font-bold text-chocolate-brown mt-4">
                  ¿Deseas este pedido en combo?
                </span>
                <span className="block text-xs text-chocolate-brown">
                  *se modificara el precio de combo
                </span>
                <div className="flex mt-3 w-full justify-center items-center">
                  <div className="flex gap-6">
                    <button className="py-0.5 px-5 bg-fire-red font-bold rounded-full text-light-ivory border-2 border-fire-red">
                      SI
                    </button>
                    <button className="py-0.5 px-4 border-2 border-fire-red font-bold rounded-full text-chocolate-brown">
                      NO
                    </button>
                  </div>
                </div>
              </section>
              <section className="mt-4 border-t-fire-red border-t-2 pt-1 leading-[13px]">
                <span className="text-chocolate-brown text-xs">
                  <strong>Si lo pediste en combo, </strong>por favor, responde
                  los siguientes apartados,{" "}
                  <strong className="text-fire-red">
                    caso de que no, omite este paso.
                  </strong>
                </span>
              </section>
              <section className="mt-2">
                <div className="flex justify-between">
                  <span className="font-bold text-chocolate-brown">
                    Acompañamiento:
                  </span>
                  <span className="font-bold text-moss-green">+$0</span>
                </div>
              </section>
              <section>
                <div className="flex justify-between">
                  <span className="font-bold text-chocolate-brown">
                    Bebida:
                  </span>
                  <span className="font-bold text-moss-green">+$0</span>
                </div>
              </section>
            </div>
          </div>
          <footer className="flex gap-6 px-20 pb-20">
            <button className="w-2/5 font-bold text-chocolate-brown border-fire-red border-2 py-1">
              <h4 className="text-xl">Subtotal:</h4>
              <span className="text-fire-red text-xl">$ 36.400</span>
            </button>
            <button
              className="w-3/5 bg-vibrant-yellow text-xl font-bold text-chocolate-brown"
              onClick={handleAddToCart}
            >
              <span>Añadir al carrito</span>
              <span></span>
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
};
