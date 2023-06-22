import { NavLink } from "react-router-dom";

export const DetailFinishOrder = () => {
  return (
    <section className="font-tahoma  text-sm">
      <div className="flex  gap-7">
        <img
          className="w-12 h-12 object-cover"
          src="https://e7.pngegg.com/pngimages/200/599/png-clipart-t-shirt-smiley-face-worried-smiley-face-smiley.png"
        />
        <div className="font-semibold">
          <h1 className="font-ifc-insane-rodeo-bold text-2xl">
            GRACIAS NOMBRE
          </h1>
          <h3>Pedido #34567</h3>
        </div>
      </div>
      <h2 className="mt-4 font-bold text-lg">Tu pedido está confirmado</h2>
      <p className="leading-none mt-2">
        Recibirás en breve un mensaje de texto de confirmación con su número de
        pedido. Adicionalmente, recibirás actualizaciones del envío y entrega de
        tu pedido por mensaje de texto.
      </p>
      <h2 className="font-bold mt-4 text-lg">Detalles del pedido</h2>
      <div className="flex mt-4">
        <div className="flex-1">
          <h2 className="font-bold">Información de cliente</h2>
          <ul className="leading-none mt-2">
            <li>Nombre + apellido</li>
            <li>Telefono</li>
            <li>Correo electrónico</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold">Método de pago</h2>
          <ul className="leading-none mt-2">
            <li>Pago contra entrega</li>
            <li>$ 84.400 COP</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white my-2" />
      <div className="flex">
        <div className="flex-1">
          <h1 className="font-bold">Dirección de envió y facturación</h1>
          <ul className="leading-none mt-2">
            <li>Dirección</li>
            <li>Casa, apartamento, etc.</li>
            <li>Comentarios</li>
            <li>Ciudad</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold ">Método de envío</h2>
          <h3>A Domicilio</h3>
          <h1 className="font-bold">Número de pedido</h1>
          <h2>#34567</h2>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4 mt-6">
        <h3>¿Necesitas ayuda? Ponte en contacto con nosotros.</h3>
        <NavLink
          to={"/"}
          className="py-2 px-4 bg-yellow-500 text-chocolate-brown font-bold"
        >
          Regresa al inicio
        </NavLink>
      </div>
    </section>
  );
};
