import { Box, Button, Modal } from "@mui/material"
import { WhatsAppIcon } from "../../../components"
import { useState } from "react"

const items = [
  {
    name: "Hamburguesa Del Rodeo"
  },
  {
    name: "Hamburguesa Ranchera"
  },
  {
    name: "Hamburguesa Polagona"
  },
  {
    name: "Hamburguesa Criolla"
  },
  {
    name: "Hamburguesa Doble Carne"
  },
  {
    name: "Hamburguesa Westen"
  },
  {
    name: "Hamburguesa Mexicana"
  },
  {
    name: "Hamburguesa Jumbo"
  },
  {
    name: "Hamburguesa Doble Jumbo"
  },
  {
    name: "Hamburguesa Mega Rodeo"
  },
]

export const Menu = () => {
  return (
    <>
      <section className="border-t-fire-red border-t-8">
        <div className="max-w-5xl mx-auto relative">
          <aside>
            <div className="absolute w-20 fill-light-ivory right-8 top-8 bg-moss-green p-3 rounded-full">
              <WhatsAppIcon />
            </div>
          </aside>
          <div className="flex justify-center gap-12">
            <span className="font-ifc-insane-rodeo-bold text-9xl text-intense-orange">-</span>
            <div>
              <h1 className="text-7xl text-center font-ifc-insane-rodeo-bold text-fire-red">
                Hola
              </h1>
              <h2 className="text-3xl font-bold text-chocolate-brown">
                ¿Qué vas a pedir hoy?
              </h2>
            </div>
            <span className="font-ifc-insane-rodeo-bold text-9xl text-intense-orange">-</span>
          </div>
        </div>
      </section>
      <header className="bg-vibrant-yellow">
        <div className="md:flex md:justify-center md:items-center mx-auto max-w-xl md:max-w-5xl px-6 py-0 sm:py-2 md:py-0 gap-4">
          <div className="flex items-center justify-center py-1 md:mb-2 h-11 sm:h-auto">
            <span className="md:mr-4 h-14 flex items-center font-ifc-insane-rodeo-bold text-intense-orange text-7xl sm:text-8xl md:text-8xl lg:text-9xl">--</span>
            <h2 className="mx-5 md:mx-0 text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-white font-ifc-insane-rodeo-bold">Domicilios AL</h2>
            <span className="md:hidden h-14 flex items-center font-ifc-insane-rodeo-bold text-intense-orange text-7xl sm:text-8xl">--</span>
          </div>
          <div className="flex justify-between mx-auto md:mx-0 m-0 max-w-[300px] md:max-w-xs py-1 md:py-3 sm:max-w-[440px] gap-4">
            <div className="flex items-center bg-fire-red px-4 py-1 sm:px-5 sm:py-2 md:px-4 text-white font-bold md:text-base sm:text-2xl rounded-lg m-0">
              <span className="m-0 h-5 sm:h-auto p-0">601 519 09 99</span>
            </div>
            <div className="flex items-center bg-fire-red px-4 py-1 sm:px-5 sm:py-2 md:px-4  text-white font-bold md:text-base sm:text-2xl rounded-lg m-0">
              <span className="m-0 h-5 sm:h-auto p-0">300 599 99 00</span>
            </div>
          </div>
          <div className="hidden md:inline-flex items-center h-11 mb-3">
            <span className="leading-[1] font-ifc-insane-rodeo-bold text-intense-orange text-7xl sm:text-8xl md:text-8xl lg:text-9xl">--</span>
          </div>
        </div>
      </header>
      <section className="max-w-5xl mx-auto">
        <div className="flex gap-4">
          <div className="w-28 h-full border-b-fire-red border-b-8 ">
            <div></div>
            <span className="text-center text-fire-red text-xl font-bold leading-[0.5px]">Combos</span>
          </div>
          <div>
            <div></div>
            <span className="text-center text-fire-red text-xl font-bold leading-[0.5px]">Promociones</span>
          </div>          
          <div>
            <div></div>
            <span className="text-center text-fire-red text-xl font-bold leading-[0.5px]">Hamburguesas</span>
          </div>          
          <div>
            <div></div>
            <span className="text-center text-fire-red text-xl font-bold leading-[0.5px]">Entrada, Parrilla y Hot Dog</span>
          </div>          
          <div>
            <div></div>
            <span className="text-center text-fire-red text-xl font-bold leading-[0.5px]">Linea Verde</span>
          </div>
          <div>
            <div></div>
            <span className="text-center text-fire-red text-xl font-bold leading-[0.5px]">Menú infantil</span>
          </div>
          <div>
            <div></div>
            <span className="text-center text-fire-red text-xl font-bold leading-[0.5px]">Bebidas, Adicionales y mas</span>
          </div>
        </div>
        <section>
          <header className="flex">
            <h2 className="font-ifc-insane-rodeo-bold text-fire-red text-5xl">Hamburguesas de carne - Carne y mas</h2>
          </header>
          <section className="grid grid-cols-5 gap-8">
            {items.map(({name}) => (
              <MenuItem name={name} />
            ))}
          </section>
        </section>
      </section>
    </>
  )
}

const MenuItem = ({name}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>
        <h2 className="border-t-chocolate-brown border-t-8 text-lg font-bold text-chocolate-brown">{name}</h2>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-light-ivory w-[620px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <div className="border-t-intense-orange mt-16 py-4 border-t-8">
            <h2 className="flex-2 text-4xl text-center font-ifc-insane-rodeo-bold text-fire-red">Hamburguesa western</h2>
          </div>
          <div className="flex gap-10 px-20">
            <div className="flex-1">
              <header className="flex justify-center">
                <div className="flex items-center gap-8">
                  <span className="text-intense-orange font-ifc-insane-rodeo-bold text-7xl">-</span>
                  <h4 className="font-bold text-chocolate-brown text-xl">Ingredientes</h4>
                  <span className="text-intense-orange font-ifc-insane-rodeo-bold text-7xl">-</span>
                </div>
              </header>
              <p className="text-center text-chocolate-brown text-sm">
                Una [1] hamburguesa con 2
                carnes de 80g cada una,
                tocineta, champiñones, doble
                queso, lechuga y tomate.
              </p>
              <div className="flex justify-center">
                <span className="text-chocolate-brown">Entrega: <span className="text-moss-green">60 minutos</span></span>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-chocolate-brown text-4xl flex justify-center font-bold mb-4">$ 31.900</span>
              <div className="flex justify-between items-center">
                <span className="text-chocolate-brown font-bold">Cantidad</span>
                <div>
                  <button className="text-lg px-2 border-fire-red border-2 rounded-full font-bold">+</button>
                  <span className="text-2xl"> 1 </span>
                  <button className="text-lg px-2.5 border-fire-red border-2 rounded-full font-bold">-</button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-chocolate-brown font-bold">Adicionales</span>
                <span className="text-moss-green font-bold">+94.023</span>
              </div>
              <section>
                <span className=" font-bold text-chocolate-brown mt-4">¿Deseas este pedido en combo?</span>
                <span className="block text-xs text-chocolate-brown">*se modificara el precio de combo</span>
                <div className="flex mt-3 w-full justify-center items-center">
                  <div className="flex gap-6">
                    <button className="py-0.5 px-5 bg-fire-red font-bold rounded-full text-light-ivory border-2 border-fire-red">SI</button>
                    <button className="py-0.5 px-4 border-2 border-fire-red font-bold rounded-full text-chocolate-brown">NO</button>
                  </div>
                </div>
              </section>
              <section className="mt-4 border-t-fire-red border-t-2 pt-1 leading-[13px]">
                <span className="text-chocolate-brown text-xs">
                  <strong>Si lo pediste en combo, </strong>por favor, responde
                  los siguientes apartados, <strong className="text-fire-red">caso de que no,
                  omite este paso.
                  </strong>
                </span>
              </section>
              <section className="mt-2">
                <div className="flex justify-between">
                  <span className="font-bold text-chocolate-brown">Acompañamiento:</span>
                  <span className="font-bold text-moss-green">+$0</span>
                </div>
              </section>
              <section>
                <div className="flex justify-between">
                  <span className="font-bold text-chocolate-brown">Bebida:</span>
                  <span className="font-bold text-moss-green">+$0</span>
                </div>
              </section>
            </div>
          </div>
          <footer className="flex gap-6 px-20 pb-20">
            <button className="w-2/5 font-bold text-chocolate-brown border-fire-red border-2 py-1">
              <h4 className="text-xl">
                Subtotal:
              </h4>
              <span className="text-fire-red text-xl">$ 36.400</span>
            </button>
            <button className="w-3/5 bg-vibrant-yellow text-xl font-bold text-chocolate-brown">
              <span>
                Añadir al carrito
              </span>
              <span></span>
            </button>
          </footer>
        </div>
      </Modal>
    </>
  )
}
