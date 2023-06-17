import { BackgroundImage } from "../../../../../components"
import { ButtonDelete, ButtonEdit } from "../buttons"

export const ProductItem = (key,producto) => {
  const {nombre} = producto
  return (
    <li key={key}>
      <div className="flex justify-between">
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
          <ButtonDelete />
        </section>
      </div>
    </li>
  )
}
