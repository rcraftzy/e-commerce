import React from "react";

export const Information = ({ setOption }) => {
  const handleOrderConfirmation = () => {
    setOption(false);
  };

  return (
    <div className="font-tahoma  text-sm">
      <h1 className=" font-bold pb-2 text-lg">Informatión del cliente</h1>
      <div className="flex gap-8  ">
        <div className="flex-1">
          <h3 className="">Nombre*</h3>
          <input
            placeholder="Nombre"
            className="bg-white px-2 rounded-full  w-full text-chocolate-brown"
          />
        </div>
        <div className="flex-1 ">
          <h3 className="">Apellido*</h3>
          <input
            placeholder="Apellido"
            className="bg-white px-2  rounded-full text-chocolate-brown w-full"
          />
        </div>
      </div>
      <div className="flex gap-8 mt-2">
        <div className="flex-1">
          <h3 className="">Pais*</h3>
          <input
            placeholder="Pais"
            className="bg-white px-2   rounded-full text-chocolate-brown w-full"
          />
        </div>
        <div className="flex-1">
          <h3>Ciudad*</h3>
          <input
            placeholder="Ciudad"
            className="bg-white px-2  rounded-full text-chocolate-brown w-full"
          />
        </div>
      </div>
      <div className="mt-4">
        <h3>Direccion*</h3>
        <div className="grid sm:grid-cols-6  grid-cols-3  gap-2  place-items-center">
          <select className="rounded-lg  bg-white  text-chocolate-brown focus:ring-blue-500 focus:border-blue-500 w-full">
            <option>x</option>
            <option>y</option>
          </select>
          <input
            placeholder="#"
            className="text-chocolate-brown bg-white rounded-lg w-full"
          />
          <select className="rounded-lg bg-white  text-chocolate-brown focus:ring-blue-500 focus:border-blue-500 w-full">
            <option>x </option>
            <option>xxx xxx </option>
          </select>
          <select className="rounded-lg flex-1 bg-white  text-chocolate-brown focus:ring-blue-500 focus:border-blue-500 w-full">
            <option>x</option>
            <option>y</option>
          </select>
          <select className="rounded-lg bg-white  text-chocolate-brown focus:ring-blue-500 focus:border-blue-500 w-full">
            <option>x </option>
            <option>xxx xxx </option>
          </select>
          <input
            placeholder="#"
            className="text-chocolate-brown bg-white rounded-lg w-full"
          />
        </div>
      </div>
      <h2 className="mt-4">Casa, apartamento, etc. (optional)</h2>
      <input
        placeholder="Casa, apartamento, etc. "
        className="bg-white px-2  rounded-full text-chocolate-brown w-full "
      />
      <h2 className="mt-4">Comentarios adicionales del pedido (optional)</h2>
      <textarea
        className="bg-white rounded-2xl w-full  max-h-32   p-2 text-chocolate-brown"
        placeholder="Comentarios adicionales"
      />
      <h2 className="mt-4 text-lg font-bold">Método de envío</h2>
      <div className="flex mt-4 gap-5  ">
        <div className="flex-1">
          <span>Envio</span>
          <div className="bg-white text-chocolate-brown px-5 pr-10 rounded-full">
            A Domicilio
          </div>
        </div>
        <div className="flex-1 flex  flex-col items-center">
          <span>Costo envio</span>
          <h3>$ 2.500</h3>
        </div>
      </div>
      <h2 className="mt-4 text-lg font-bold">Método de pago</h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 mt-4 sm:gap-4 gap-2 ">
        <div className="flex-1 flex flex-col items-center ">
          <h3>Físico</h3>
          <ul className="flex gap-3 sm:justify-between justify-center  w-full sm:px-0 px-10">
            <li className="bg-moss-green px-5  rounded-full">Efectivo</li>
            <li className="bg-white text-chocolate-brown px-5  rounded-full">
              Tarjeta
            </li>
          </ul>
          <p className="text-[0.7rem]  leading-none mt-1">
            *Para pago mediante opción física con tarjeta, el domiciliario
            llegará con el datáfono.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center  sm:mt-0 mt-4">
          <h3>Online</h3>
          <h3 className=" border border-white   rounded-full   px-4 flex justify-center ">
            No Disponible
          </h3>

          <p className="text-[0.7rem]  leading-none mt-1 text-center sm:text-start">
            *Para pago mediante opción online se puede hacer con tarjeta débito
            o crédito a través de medio online.
          </p>
        </div>
      </div>
      <h3 className="mt-4  ">
        Todas las transacciones son seguras y están encriptadas.
      </h3>
      <h3 className="mt-4 text-lg font-bold">Registro y facturación</h3>
      <h4 className="mt-2">Correo eletrónico*</h4>
      <input
        className="bg-white rounded-full px-4"
        placeholder="alguienejemplo@algo.com"
      />
      <h4 className="mt-4">Número de teléfono*</h4>
      <div className="flex gap-2">
        <span>+57</span>
        <input
          className="bg-white rounded-full px-4"
          placeholder="313 313 33 11"
        ></input>
      </div>
      <h4 className="mt-2 leading-none ">
        Puedes recibir mensajes de texto relacionados con la confirmación del
        pedido y actualizaciones de envío.
      </h4>
      <div className="flex gap-2 mt-4">
        <input type="radio" />
        <span className="">
          Guardar mi información y consultar más rápidamente la próxima vez
        </span>
      </div>
      <div className="flex gap-2">
        <input type="radio" />
        <span>Enviarme novedades y ofertas por SMS</span>
      </div>
      <p className="mt-4 leading-none text-[0.7rem]">
        Al registrarse por SMS, aceptas recibir mensajes autom atizados de
        marketing recurrentes al número proporcionado, incluyendo recordatorios
        de carritos. El concentimiento no es una condición de compra. Responde
        STOP para darte de baja. Responde HELP para obtener ayuda. La frecuencia
        de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Ve
        nuestra Política de privacidad y nuestros Términos del servicio.
      </p>
      <div className="flex mt-5 gap-3">
        <h3 className="flex-1 flex justify-start items-end">
          Políticas de privacidad
        </h3>
        <button
          type="button"
          onClick={handleOrderConfirmation}
          className="flex-1 py-3 bg-yellow-400 text-chocolate-brown px-4 font-bold "
        >
          Continuar
        </button>
      </div>
    </div>
  );
};
