import { useState } from "react"
import { Content } from "../Content"
import { Header } from "../Header"
import { Button, ButtonBorderGreen, ButtonSearch } from "../buttons"
import { TicketItem } from "./TicketItem"
import { Modal } from "@mui/material"

export const Tickets = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  return (
    <section id="tickets">
      <Header title={"Codigos de descuento"}>
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
              <h2 className="text-5xl font-ifc-insane-rodeo-bold text-center mb-6 text-fire-red">CREAR CODIGO DE DESCUENTO</h2>
              <form>
                <div className="flex gap-5">
                  <section className="flex flex-col gap-6 w-1/3">
                    <label className="text-chocolate-brown text-xl font-bold">Nombre Código*</label>
                    <label className="text-chocolate-brown text-xl font-bold">Tipo de Descuento*</label>
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
                  </section>
                </div>
                <div className="mt-4 flex flex-col gap-4">
                  <section className="flex gap-4">
                    <div className="flex-1">
                      <label className="text-chocolate-brown text-xl font-bold">Porcentaje descuento*</label>
                    </div>
                    <div className="flex-1">
                      <input 
                        type="text" 
                        className={`sm:mr-28 lg:mr-0 text-lg sm:text-xl bg-white p-1 pl-6 rounded-3xl text-chocolate-brown`} 
                        placeholder="Click aquí*" 
                        required 
                      />
                    </div>
                  </section>
                </div>
                <footer className="flex justify-center gap-4 mt-4">
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
        {tickets.map((producto) => (
          <TicketItem key={producto.nombre} producto={producto}/>
        ))}

      </Content>
    </section>
  )
}

const tickets = [
{
    nombre: "Domigratis",
    categoria: "domicilio",
    descuento: "15",
  },
{
    nombre: "rodeodeo",
    categoria: "Total",
    descuento: "10",
  },
  {
    nombre: "rodeoverde",
    categoria: "Total",
    descuento: "15",
  },
]
