export const OrderConfirmation = ({ setOption, setFinishOrder }) => {
  const handleInformation = () => {
    setOption(true);
  };
  const handleFinishOrder = () => {
    setFinishOrder(true);
  };
  return (
    <div className="font-tahoma text-sm flex flex-col  h-full ">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-lg font-bold ">Confirmación del pedido</h1>
        <div className="flex gap-2 mt-4">
          <h3 className="w-20 ">Contacto*</h3>
          <input
            className="flex-1 rounded-full px-2 bg-white text-chocolate-brown"
            placeholder="Nombre + Apellido"
          />
          <span className="">Cambiar</span>
        </div>
        <div className="flex gap-2 mt-2">
          <h3 className="w-20 ">Teléfono*</h3>
          <input
            className="flex-1 rounded-full px-2 bg-white text-chocolate-brown"
            placeholder="Número de teléfono"
          />
          <span className="">Cambiar</span>
        </div>
        <div className="flex gap-2 mt-2">
          <h3 className="w-20 ">Email</h3>
          <input
            className="flex-1 rounded-full px-2 bg-white text-chocolate-brown"
            placeholder="Correo eléctronico"
          />
          <span className="">Cambiar</span>
        </div>
        <div className="flex gap-2 mt-2">
          <h3 className="w-20 ">Enviar a*</h3>
          <input
            className="flex-1 rounded-full px-2 bg-white text-chocolate-brown"
            placeholder="Dirección + casa, apartamento, etc."
          />
          <span className="">Cambiar</span>
        </div>
        <div className="flex gap-2 mt-2">
          <h3 className="w-20 ">Envió</h3>
          <input
            className="flex-1 rounded-full px-2 bg-white text-chocolate-brown"
            placeholder="Metodo de pago"
          />
          <span className="">Cambiar</span>
        </div>
        <h2 className="text-lg font-bold  ">Pago contra entrega</h2>
        <p className="leading-none">
          El pago se realizará al domiciliario que entregará el pedido.
        </p>
      </div>
      <div className="flex   md:h-full items-center">
        <div className="flex-1 flex flex-col gap-3 items-start">
          <button onClick={handleInformation}>
            <span> &lt; </span>
            <span className="hover:underline">Volver a información</span>
          </button>
          <h4>Política de privacidad</h4>
        </div>
        <button
          onClick={handleFinishOrder}
          className="flex-1 bg-yellow-500 text-chocolate-brown py-4 font-bold "
        >
          Finalizar pedido
        </button>
      </div>
    </div>
  );
};
