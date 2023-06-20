import { useState } from "react"
import { Content } from "../Content"
import { Header } from "../Header"
import { Button, ButtonBorderGreen, ButtonSearch } from "../buttons"
import { BannerItem } from "./BannerItem"
import { Modal } from "@mui/material"

export const Banners = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  return (
    <section id="banners">
      <Header title={"Banners"}>
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
              <h2 className="text-5xl font-ifc-insane-rodeo-bold text-center mb-6 text-fire-red">CREAR BANNER</h2>
              <form>
                <div className="flex gap-5">
                  <section className="flex flex-col gap-6 w-1/3">
                    <label className="text-chocolate-brown text-xl font-bold">Título*</label>
                    <label className="text-chocolate-brown text-xl font-bold">Subtitulo*</label>
                    <label className="text-chocolate-brown text-xl font-bold">Nombre CTA*</label>
                    <label className="text-chocolate-brown text-xl font-bold">Enlace web*</label>
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
<input 
                        type="text" 
                        className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                        placeholder="Click aquí*" 
                        required 
                      />
                  </section>
                </div>
                <div className="mt-4 flex flex-col gap-4">
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
        {productosItem.map((producto, index) => (
          <BannerItem key={index} producto={producto}/>
        ))}
      </Content>
    </section>
  )
}

const productosItem = [
  {
    titulo: "Evento",
    subtitulo: "Nos encargamos de tus eventos",
    imagen: "28.500",
    calltoaction: "Hamburguesas",
  },
  {
    titulo: "Combo Dio",
    subtitulo: "asklfas",
    imagen: "28.500",
    calltoaction: "Hamburguesas",
  },
  {
    titulo: "Hamburguesa Patagonia",
    subtitulo: "askflasklf",
    imagen: "28.500",
    calltoaction: "Hamburguesas",
  },
]
