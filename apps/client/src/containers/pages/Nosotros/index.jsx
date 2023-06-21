import { NavLink } from "react-router-dom"
import { BackgroundImage, HamburguesaIcon, ToroIcon } from "../../../components"

export const Nosotros = () => {
  return (
    <>
      <section className="relative mx-auto max-w-5xl pt-36">
        <div className="flex flex-col z-0 sm:flex-row absolute inset-x-0 inset-y-0">
          <span className="absolute h-full w-auto inset-x-0 bg-[#00000050] inset-y-0"/>
          <img 
            src="/assets/banners/Banner-6.png"
            className="w-full object-cover"
            alt="foto"/>
        </div>
        <div className="relative h-80 sm:h-40 lg:h-96 flex flex-col sm:flex-row sm:justify-between pt-4 sm:pb-4 sm:pt-9 md:pt-5 mx-auto max-w-5xl px-11 sm:px-14">
          <section className="flex flex-col gap-3 mt-40">
            <h3 className="flex justify-center z-10 sm:justify-start text-center font-ifc-insane-rodeo-bold text-3xl sm:text-[42px] md:text-5xl mb-2 text-light-gold drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">Acerca de</h3>
            <div className="inline-flex items-center justify-center sm:justify-start h-11 mb-6">
              <span className="font-ifc-insane-rodeo-bold text-8xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)] mb-4">Nosotros</span>
            </div>
          </section>
        </div>
      </section>
      <section className="max-w-5xl mx-auto mt-9">
        <article className="max-w-4xl mx-auto">
          <h1 className="font-ifc-insane-rodeo-bold text-fire-red text-center text-5xl">Somos hamburgesas del rodeo</h1>
          <article className="flex gap-5 items-center">
            <span className="w-40 ">
              <ToroIcon />
            </span>
            <div className="max-w-xl mx-auto text-sm text-chocolate-brown text-center">
              <br />
              <p>Somos una organización de servicio 100% colombiana dedicada a satisfacer el gusto por la hamburguesa, 100% sin adictivos</p>
              <br />
              <p>Nuestros objetivos de rentabilidad, crecimiento y competitividad estarán en función de
                las necesidades de los clientes y de las condiciones del mercado, siempre enmarcadas
                por los más claros principios éticos y legales</p>
              <br />
              <p>
                Nuestra ventaja competitiva es la excelencia en nuestros productos y servicios.
                Fundamentada en la calidad de las personas que la conformamos y en la eficiente
                utilización que hacemos de los recursos disponibles para la prestación del mismo.
                Nuestra empresa siempre será reconocida como una organización competitiva con el
                desarrollo de la gente, de sus clientes y del país.
              </p>
            </div>
            <span className="w-40 fit-chocolate-brown">
              <HamburguesaIcon />
            </span>
          </article>
        </article>
      </section>
      <div className="">
        <BackgroundImage className={"bg-cover"} image={"/assets/button-maderado-green.png"}>
          <section className="mt-10 pb-10 pt-6">
            <div className="mx-auto max-w-5xl flex">
              <article className="flex-1">
                <div className="flex items-center max-w-md mb-3">
                  <span className="font-ifc-insane-rodeo-bold text-9xl text-light-ivory">-</span>
                  <p className="text-light-ivory ml-3 font-sm">
                    Nuestra visión es, una mejor alternativa en
                    cuanto a productos, calidad y precios. Ser
                    reconocidos como una empresa modelo de
                    calidad y servicio en todos nuestros
                    restaurantes
                  </p>
                </div>
                <span className="flex justify-center sm:justify-start z-10 sm:mb-5">
                  <BackgroundImage image={"/assets/button-maderado-amarillo.png"} className={"bg-cover"}>
                    <div 
                      className="flex items-center text-chocolate-brown py-6 px-5 h-10 text-lg font-bold"
                    >
                      <NavLink to="/menu" >
                        Consulta nuestro menú 
                      </NavLink>
                    </div>
                  </BackgroundImage>
                </span>
              </article>
              <aside className="flex-1"></aside>
            </div>
          </section>
        </BackgroundImage>
      </div>

      <section className="max-w-5xl mx-auto text-center mt-12">
        <h2 className="font-ifc-insane-rodeo-bold text-5xl text-chocolate-brown">Aportando nuestros valores</h2>
        <div className="flex gap-12 justify-center mt-6">
          <div>
            <span className="text-chocolate-brown text-xl font-bold">Compromiso</span>
          </div>
          <div>
            <span className="text-intense-orange font-bold text-xl">Lealtad</span>
          </div>
          <div>
            <span className="text-fire-red font-bold text-xl">Gratitud</span>
          </div>
          <div>
            <span className="text-moss-green font-bold text-xl">Respeto</span>
          </div>
          <div>
            <span className="text-light-gold font-bold text-xl">Honestidad</span>
          </div>
        </div>
      </section>
      <section className="text-center mt-8">
        <h2 className="font-ifc-insane-rodeo-bold text-5xl text-intense-orange mb-10">Y nuestros objetivos</h2>
        <div className="">
          <div className="min-w-full flex mb-4">
            <div className="bg-fire-red w-1/5 h-20 rounded-r-[24px]"/>
            <div className="w-1/5 pl-7 text-chocolate-brown text-[13px] text-right">
              Consolidarnos como una empresa a nivel
              nacional, obteniendo beneficios no solo a
              nivel particular sino beneficios a todos los
              integrantes, no solo por medio del trabajo,
              sino de la capacitación y participación
              directa de nuestros trabajadores.
            </div>
            <div className="w-1/5 flex justify-center items-center">
              <img src="/assets/icons/estrellared.png" className="h-20" alt="red" />
            </div>
            <div className="bg-fire-red w-2/5 h-20 rounded-l-[24px]"/>
            <div/>
          </div>
          <div className="min-w-full flex  mb-4">
            <div className="bg-light-gold w-2/5 h-20 rounded-r-[24px]"/>
            <div className="w-1/5 flex justify-center items-center">
              <img src="/assets/icons/estrellayellow.png" className="h-20" alt="red" />
            </div>
            <div className="w-1/5 pl-7 text-chocolate-brown text-[13px] text-left">
              Garantizar la calidad y optimización en
              todos los procesos de producción,
              desarrollando programas de control de
              calidad en cada uno de nuestros puntos de
              venta.
            </div>
            <div/>
            <div className="bg-light-gold w-1/5 h-20 rounded-l-[24px]"/>
          </div>
          <div className="min-w-full flex  mb-4">
            <div className="bg-moss-green w-1/5 h-20 rounded-r-[24px]"/>
            <div className="w-1/5 pl-7 text-chocolate-brown text-[13px] text-right">
              Controlar permanentemente la calidad de
              los insumos y proveedores con el objeto
              de mantener una alta calidad y muy
              buenos precios.
            </div>
            <div className="w-1/5 flex justify-center items-center">
              <img src="/assets/icons/estrellagreen.png" className="h-20" alt="red" />
            </div>
            <div className="bg-moss-green w-2/5 h-20 rounded-l-[24px]"/>
            <div/>
          </div>
          <div className="min-w-full flex">
            <div className="bg-intense-orange w-2/5 h-20 rounded-r-[24px]"/>
            <div className="w-1/5 flex justify-center items-center">
              <img src="/assets/icons/estrellaorange.png" className="h-20" alt="red" />
            </div>
            <div className="w-1/5 pl-7 text-chocolate-brown text-[13px] text-left">
              Diseñar programas de consulta periódica a
              los clientes, con el fin de integrarlos a la
              empresa y optimizar nuestra cadena de
              producción.
            </div>
            <div/>
            <div className="bg-intense-orange w-1/5 h-20 rounded-l-[24px]"/>
          </div>
        </div>
      </section>
      <section className="bg-fire-red pb-8 mt-20">
        <div className="max-w-5xl mx-auto">
          <span className="">
            <h2 className=" pt-7 font-ifc-insane-rodeo-bold text-light-ivory text-5xl">Trabaja con nosotros</h2>
          </span>
          <div className="relative flex items-center max-w-[380px]">
            <span className="absolute font-ifc-insane-rodeo-bold text-9xl text-white">-</span>
                  <BackgroundImage image={"/assets/button-maderado-amarillo.png"} className={"bg-cover"}>
                    <div 
                      className="flex items-center text-chocolate-brown py-5 px-6 h-10 text-lg font-bold"
                    >
                      <NavLink to="/menu" >
                        Envia tus datos en el formulario
                      </NavLink>
                    </div>
                  </BackgroundImage>
            <span className="absolute right-0 font-ifc-insane-rodeo-bold text-9xl text-white">-</span>
          </div>
        </div>
      </section>
    </>
  )
}
