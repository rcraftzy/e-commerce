import { Modal } from "@mui/material"
import { BackgroundImage } from "../../../../../components"
import { ButtonDelete, ButtonEdit, Button } from "../buttons"
import { useState } from "react";

export const ProductItem = (key,producto) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  const {nombre} = producto
  return (
    <li key={key}>
      <div className="flex justify-between px-10">
        <div className="flex gap-4">
          <aside></aside>
          <div>
            <BackgroundImage
              className={"bg-cover"} 
              image={"/assets/menu/FONDO_MENU_PRODUCTOS.jpg"}
            >
              <img 
                className="w-24 pb-2 pt-5 px-2" 
                src="/assets/menu/HAMBURGUESAS.png" 
                alt="item" 
              />
            </BackgroundImage>
          </div>
          <article className="text-chocolate-brown">
            <h3 className="text-xl">Hamburguesa Petagonia</h3>
            <ul className="leading-4">
              <li>
                <span className="font-bold">Nombre</span>
                <span>{nombre}</span>
              </li>
              <li>
                <span className="font-bold">Precio unitario</span>
                <span>$ {producto.precio}</span>
              </li>
              <li>
                <span className="font-bold">Precio combo</span>
                <span>$ {producto.precioCombo}</span>
              </li>
              <li>
                <span className="font-bold">Categoria</span>
                <span>{producto.categoria}</span>
              </li>
            </ul>
          </article>
        </div>
        <section className="flex flex-col justify-end gap-2">
          <ButtonEdit />
          <ButtonDelete onClick={handleClick}>
            Eliminar
          </ButtonDelete>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="bg-light-ivory w-[820px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
              <div className=" py-10 px-20">
                <h2 className="font-bold text-5xl text-center mb-6 text-chocolate-brown">¿Deseas eliminar este elemento?</h2>
                <footer className="flex justify-center gap-4">
                  <Button className={"border-fire-red bg-fire-red text-white px-9"}>
                    Eliminar
                  </Button>
                  <ButtonDelete onClick={handleClose} className="">
                    Cancelar
                  </ButtonDelete>
                </footer>
              </div>
            </div>
          </Modal>
        </section>
      </div>
    </li>
  )
}
