import React from "react";

export const OrderConfirmation = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1>Confirmación del pedido</h1>
      <div className="flex gap-2">
        <h3 className="w-20 ">Contacto*</h3>
        <input
          className="flex-1 rounded-full px-2 bg-white"
          placeholder="Nombre + Apellido"
        />
        <span className="">Cambiar</span>
      </div>
      <div className="flex gap-2">
        <h3 className="w-20 ">Teléfono*</h3>
        <input
          className="flex-1 rounded-full px-2 bg-white"
          placeholder="Número de teléfono"
        />
        <span className="">Cambiar</span>
      </div>
      <div className="flex gap-2">
        <h3 className="w-20 ">Email</h3>
        <input
          className="flex-1 rounded-full px-2 bg-white"
          placeholder="Correo eléctronico"
        />
        <span className="">Cambiar</span>
      </div>
      <div className="flex gap-2">
        <h3 className="w-20 ">Enviar a*</h3>
        <input
          className="flex-1 rounded-full px-2 bg-white"
          placeholder="Dirección + casa, apartamento, etc."
        />
        <span className="">Cambiar</span>
      </div>
      <div className="flex gap-2">
        <h3 className="w-20 ">Envió</h3>
        <input
          className="flex-1 rounded-full px-2 bg-white"
          placeholder="Metodo de pago"
        />
        <span className="">Cambiar</span>
      </div>
      <h2>Pago contra entrega</h2>
      <p>El pago se realizará al domiciliario que entregará el pedido.</p>
      <div className="flex">
        <div className="flex-1">
          <button>Volver a información</button>
          <h4>Política de privacidad</h4>
        </div>
        <button className="flex-1">Finalizar pedido</button>
      </div>
    </div>
  );
};
