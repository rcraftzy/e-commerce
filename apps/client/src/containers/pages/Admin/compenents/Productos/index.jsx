import { useState } from "react"
import { Content } from "../Content"
import { Header } from "../Header"
import { Button, ButtonBorderGreen, ButtonSearch } from "../buttons"
import { ProductItem } from "./ProductoItem"
import { Modal } from "@mui/material"

export const Productos = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  return (
    <section id="productos">
      <Header title={"Productos"}>
        <ButtonBorderGreen onClick={handleClick}>
          Crear
        </ButtonBorderGreen>
        <ButtonSearch />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="bg-light-ivory w-[820px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
            <div className=" py-10 px-20">
              <h2 className="text-5xl font-ifc-insane-rodeo-bold text-center mb-6 text-fire-red">CREAR NUEVO PRODUCTO</h2>
              <form>
                <section className="flex gap-8">
                  <div className="flex">
                    <label className="text-chocolate-brown text-xl font-bold">Nombre producto*</label>
                  </div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                      placeholder="Click aquí*" 
                      required 
                    />
                  </div>
                </section>
                <section className="grid grid-cols-4 gap-4 py-4">
                  <label className="text-chocolate-brown text-xl font-bold">Precio unidad*</label>
                  <input 
                    type="text" 
                    className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                    placeholder="Click aquí*" 
                    required 
                  />
                  <label className="text-chocolate-brown text-xl font-bold">Entrega*</label>
                  <input 
                    type="text" 
                    className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                    placeholder="Click aquí*" 
                    required 
                  />
                  <label className="text-chocolate-brown text-xl font-bold">Precio combo*</label>
                  <input 
                        type="text" 
                        className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                        placeholder="Click aquí*" 
                        required 
                      />
                    <label className="text-chocolate-brown text-xl font-bold">Categoria*</label>
                      <input 
                        type="text" 
                        className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                        placeholder="Click aquí*" 
                        required 
                      />
                </section>
                <section className="flex gap-8">
                  <div className="flex">
                    <label className="text-chocolate-brown text-xl font-bold">Ingredientes</label>
                  </div>
                  <div className="flex-1">
                    <textarea rows="3" cols="" className="w-full text-chocolate-brown text-xl bg-white pl-6 rounded-3xl"></textarea>
                  </div>
                </section>
                <div className="mb-4 flex flex-col gap-4">
                  <label className="text-chocolate-brown text-xl font-bold">Elige la imagen del banner que deseas subir*</label>
                  <section className="flex gap-4">
                    <div className="flex-1">
                      <input 
                        type="text" 
                        className={`w-full sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                        placeholder="Click aquí*" 
                        required 
                      />
                    </div>
                    <div className="flex justify-end">
                      <ButtonBorderGreen>
                        Subir foto
                      </ButtonBorderGreen>
                    </div>
                  </section>
                </div>
                <div className="flex gap-5">
                  <section className="flex flex-col gap-6 w-1/3">
                    <label className="text-chocolate-brown text-xl font-bold">Adicionales*</label>
                    <label className="text-chocolate-brown text-xl font-bold">Acompañamiento*</label>
                    <label className="text-chocolate-brown text-xl font-bold">Bebidas*</label>
                  </section>
                  <section className="w-2/3 flex flex-col gap-4">
                    <input 
                        type="text" 
                        className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                        placeholder="Click aquí*" 
                        required 
                      />
                    <input 
                        type="text" 
                        className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                        placeholder="Click aquí*" 
                        required 
                      />
                    <input 
                        type="text" 
                        className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                        placeholder="Click aquí*" 
                        required 
                      />
                  </section>
                </div>
                <footer className="flex justify-center gap-4 mt-5">
                  <Button className={"border-moss-green bg-moss-green px-9 text-white"}>
                    Crear 
                  </Button>
                  <Button onClick={handleClose} className={"border-fire-red bg-fire-red text-white px-9"}>
                    Cancelar
                  </Button>
                </footer>

              </form>
            </div>
          </div>
      </Modal>
      </Header>
      <Content>
        {productosItem.map((producto) => (
          <ProductItem key={producto.nombre} producto={producto}/>
        ))}
      </Content>
    </section>
  )
}

const productosItem = [
  {
    nombre: "Hamburguesa Patagonia",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
  },
  {
    nombre: "Hamburguesa Western",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
  },
  {
    nombre: "Hamburguesa Rodeo",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
  },
  {
    nombre: "Hamburguesa",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
  },
{
    nombre: "Hamburguesa grande",
    precio: "20.400",
    precioCombo: "28.500",
    categoria: "Hamburguesas",
  },

]
