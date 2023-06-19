import React from "react";

export const Information = () => {
  return (
    <div className="">
      <h1>Informatión del cliente</h1>
      <div className="flex gap-2 ">
        <div className="flex-1">
          <h3>Nombre*</h3>
          <input
            placeholder="Nombre"
            className="bg-white px-2   rounded-full text-black w-full"
          />
        </div>
        <div className="flex-1 ">
          <h3>Apellido*</h3>
          <input
            placeholder="Apellido"
            className="bg-white px-2  rounded-full text-black w-full"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <h3>Pais*</h3>
          <input
            placeholder="Pais"
            className="bg-white px-2   rounded-full text-black w-full"
          />
        </div>
        <div className="flex-1">
          <h3>Ciudad*</h3>
          <input
            placeholder="Ciudad"
            className="bg-white px-2  rounded-full text-black w-full"
          />
        </div>
      </div>
      <h2>Casa, apartamento, etc. (optional)</h2>
      <input
        placeholder="Ciudad"
        className="bg-white px-2  rounded-full text-black w-full"
      />
      <h2>Comentarios adicionales del pedido (optional)</h2>
      <textarea
        className="bg-white rounded-2xl w-full h-28"
        placeholder="Comentarios adicionales"
      />
      <h2>Método de envío</h2>
      <div className="flex">
        <div>
          <span>Envio</span>
          <div className="bg-white text-black px-5 pr-10 rounded-full">
            A Domicilio
          </div>
        </div>
        <div>
          <span>Consto envio</span>
          <h3>$ 2.500</h3>
        </div>
      </div>
      <h2>Método de pago</h2>
      <div className="flex">
        <div className="flex-1">
          <h3>Físico</h3>
          <ul className="flex gap-3">
            <li className="bg-moss-green px-5  rounded-full">Efectivo</li>
            <li className="bg-white text-black px-5  rounded-full">Tarjeta</li>
          </ul>
          <p className="">
            *Para pago mediante opción física con tarjeta, el domiciliario
            llegará con el datáfono.
          </p>
        </div>
        <div className="flex-1">
          <h3>Online</h3>
          <ul className="flex gap-3">
            <li className="border border-white px-5  rounded-full">
              No Disponible
            </li>
          </ul>
          <p className="">
            *Para pago mediante opción online se puede hacer con tarjeta débito
            o crédito a través de medio online.
          </p>
        </div>
      </div>
      <span>Totas las transacciones son seguras y están encriptadas.</span>
      <h3>Registro y facturación</h3>
      <h4>Correo eletrónico*</h4>
      <input
        className="bg-white rounded-full px-4"
        placeholder="alguienejemplo@algo.com"
      />
      <h4>Número de teléfono*</h4>
      <div className="flex gap-2">
        <span>+57</span>
        <input
          className="bg-white rounded-full px-4"
          placeholder="313 313 33 11"
        ></input>
      </div>
      <h4>
        Puedes recibir mensajes de texto relacionados con la confirmación del
        pedido y actualizaciones de envío.
      </h4>
      <div className="flex gap-2">
        <input type="radio" />
        <span>
          Guardar mi información y consultar más rápidamente la próxima vez
        </span>
      </div>
      <div className="flex gap-2">
        <input type="radio" />
        <span>Enviarme novedades y ofertas por SMS</span>
      </div>
      <p>
        Al registrarse por SMS, aceptas recibir mensajes autom atizados de
        marketing recurrentes al número proporcionado, incluyendo recordatorios
        de carritos. El concentimiento no es una condición de compra. Responde
        STOP para darte de baja. Responde HELP para obtener ayuda. La frecuencia
        de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Ve
        nuestra Política de privacidad y nuestros Términos del servicio.
      </p>
      <div className="flex mt-5 gap-3">
        <span>Políticas de privacidad</span>
        <button className="py-3 bg-yellow-400 text-blue-50 px-4">
          Continuar
        </button>
      </div>
    </div>
  );
};
