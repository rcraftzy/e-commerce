import emailjs from '@emailjs/browser'
import { useState } from 'react';
export const Contactenos = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_CONTACT_SERVICE_ID, import.meta.env.VITE_CONTACT_TEMPLATE_ID, e.target, import.meta.env.VITE_CONTACT_USER_ID)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error.text);
      });
    setFormData({
      email: '',
      name: '',
      phoneNumber: '',
      subject: '',
      message: '',
    })
  };
  return (
    <>
      <section>
        <div className="mx-auto max-w-5xl bg-gray-600">
          <div className="pt-4 sm:pb-4 sm:pt-9 md:pt-5 mx-auto max-w-5xl px-11 sm:px-14">
            <section className="flex flex-col">
              <h3 className="flex justify-center z-10 sm:justify-start text-center font-ifc-insane-rodeo-bold text-3xl sm:text-[42px] md:text-5xl mb-2 text-white drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">Formulario de Contacto</h3>
              <div className="max-w-2xl mb-2">
                <span className="text-xl text-light-ivory mb-4">Construimos este espacio para que podamos hablar, llena los datos
                  a continuación y te contactaremos lo más pronto posible.</span>
              </div> 
            </section>
            <div className="mt-4"> 
              <form onSubmit={handleSubmit} className="flex gap-4">
                <div className="flex flex-1 flex-col gap-4">
                  <input 
                    type="text" 
                    name="name"
                    className="text-2xl p-1 pl-6 rounded-3xl font-bold" 
                    placeholder="Nombre*" 
                    value={formData.name} 
                    onChange={handleChange}
                    required 
                  />
                  <input 
                    type="text" 
                    className="text-2xl p-1 pl-6 rounded-3xl font-bold" 
                    placeholder="Correo electrónico*" 
                    value={formData.email} 
                    name="email"
                    onChange={handleChange}
                    required 
                  />
                  <input 
                    type="text" 
                    className="text-2xl p-1 pl-6 rounded-3xl font-bold" 
                    placeholder="Número de celular*" 
                    name="phoneNumber"
                    value={formData.phoneNumber} 
                    onChange={handleChange}
                    required 
                  />
                  <div>
                    <button className="text-chocolate-brown bg-vibrant-yellow mt-6 mb-32 px-11 py-3 text-lg font-bold" type="submit">Enviar Mensaje</button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <input 
                    type="text" 
                    className="text-2xl p-1 pl-6 rounded-3xl font-bold" 
                    placeholder="Motivo de consulta*" 
                    name="subject"
                    value={formData.subject} 
                    onChange={handleChange}
                    required 
                  />
                  <textarea 
                    value={formData.message} 
                    className="text-2xl p-2 pl-6 rounded-3xl font-bold" 
                    placeholder="Mensaje*" 
                    name="message"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-5xl bg-fire-red">
          <div className="pt-4 sm:pb-4 sm:pt-9 md:pt-5 mx-auto max-w-5xl px-11 sm:px-14">
            <section className="flex flex-col">
              <h3 className="flex justify-center z-10 text-center font-ifc-insane-rodeo-bold text-3xl sm:text-[42px] md:text-5xl mb-3 text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">Formulario de dudas - Quejas - Reclamos</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:h-11 lg:h-16 mb-3">
              <div className="max-w-2xl mb-2">
                  <span className="text-xl font-bold text-light-ivory mb-4">
                    ¿Tienes alguna duda, queja o comentario?. Cuéntanos acerca de tu
                    experiencia y que podemos mejorar.
                  </span>
                </div>
                <span className="flex items-end mb-2 sm:mb-5">
                  <a className="text-chocolate-brown bg-vibrant-yellow mt-2 px-2 py-3 text-lg font-bold">Llena el formulario aquí</a>
                </span>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
