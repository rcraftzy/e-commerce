import { Header } from "../Header"
import { ButtonCreate, ButtonSearch } from "../buttons"
import { ProductItem } from "./ProductoItem"

export const Productos = () => {
  return (
    <section id="productos">
      <Header title={"Productos"}>
        <ButtonCreate />
        <ButtonSearch />
      </Header>
      <div className="bg-white">
        <ul className="mx-auto max-w-2xl h-56 overflow-auto flex py-2 flex-col gap-4 divide-y-2">
          {productosItem.map((producto) => (
            <ProductItem key={producto.nombre} producto={producto}/>
          ))}
        </ul>
      </div>
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
