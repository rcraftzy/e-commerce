import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper"
import { Button, Modal } from "@mui/material"
import { useState } from "react"

export const Eventos = () => {
  return (
    <>
      <section className="relative mx-auto max-w-5xl">
        <div className="flex flex-col z-0 sm:flex-row absolute inset-x-0 inset-y-0">
          <span className="absolute h-80 sm:h-40 lg:h-72 inset-x-0 bg-[#00000050] inset-y-0"/>
          <img 
            src="/assets/banners/Banner-6.png"
            className="w-full object-cover"
            alt="foto"/>
        </div>
        <div className="relative h-80 sm:h-40 lg:h-72 flex flex-col sm:flex-row sm:justify-between pt-4 sm:pb-4 sm:pt-9 md:pt-5 mx-auto max-w-5xl px-11 sm:px-14">
          <div className="mt-14 sm:mt-0 lg:mt-11">
            <aside className="flex z-10 flex-col font-ifc-insane-rodeo-bold text-right">
              <div className="inline-flex items-center h-11 mb-2 justify-end">
                <h3 className="mt-36 text-8xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">Eventos</h3>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center mx-auto max-w-xl md:max-w-5xl px-2 py-0 sm:py-2 md:py-2">
          <header className="flex justify-center items-center gap-16">
            <span className="text-9xl font-ifc-insane-rodeo-bold text-intense-orange">-</span>
            <h2 className="md:mx-0 text-4xl text-center md:text-5xl lg:text-6xl text-chocolate-brown font-ifc-insane-rodeo-bold">Crea eventos inolvidables</h2>
            <span className="text-9xl font-ifc-insane-rodeo-bold text-intense-orange">-</span>
          </header>
          <span className="max-w-3xl mb-14 flex items-center justify-center text-center text-chocolate-brown font-bold text-3xl">
            Eleva tu ocasión especial con nuestros servicios de
            eventos premium, diseñados a la perfección en
            Hamburguesas del Rodeo.
          </span>
        </div>
        <div className="max-w-3xl mx-auto mb-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            navigation={true}
          >
            <SwiperSlide>
              <ItemSwiper title="Fiestas" subtitle="infantiles" img="Foto-1.png">
              </ItemSwiper>
            </SwiperSlide>
<SwiperSlide>
              <ItemSwiper title="Eventos" subtitle="Corporativos" img="Foto-1.png">
              </ItemSwiper>
            </SwiperSlide>
            <SwiperSlide>
              <ItemSwiper subtitle="Reservaciones" img="Foto-1.png">
              </ItemSwiper>
            </SwiperSlide>
            <SwiperSlide>
              <ItemSwiper secondSubtitle="Decoraciones" subtitle="tematicas" img="Foto-1.png">
              </ItemSwiper>
            </SwiperSlide>
            <SwiperSlide>
              <ItemSwiper subtitle="recreacion" img="Foto-1.png">
              </ItemSwiper>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

const ItemSwiper = ({title, subtitle, img, secondSubtitle}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onlyTitleClass = !title ? "top-5" : "top-8"
  const twoSubtitle = !secondSubtitle ? "" : "top-11"
  return (
    <>
      <div className="h-96">
        <div className="h-3/4">
          <img className="h-full rounded-t-[40px]" src={`/assets/pictures/${img}`} alt="foto" />
        </div>
        <div className="relative h-1/4 border-t-8 border-intense-orange flex flex-col items-center text-center">
          <span className="absolute z-10 text-chocolate-brown font-ifc-insane-rodeo-bold text-5xl">
            {title}

          </span>
          <span className={`absolute top-3 inset-x-0 text-chocolate-brown bg-white font-ifc-insane-rodeo-bold text-4xl`}>
            {secondSubtitle}
          </span>
          <span className={`absolute ${onlyTitleClass} ${twoSubtitle} inset-x-0 text-chocolate-brown bg-white font-ifc-insane-rodeo-bold text-4xl`}>
            {subtitle}
          </span>
        </div>
      </div>
      <button onClick={handleOpen} className="mb-4 bg-intense-orange rounded-box text-white font-bold px-8 py-1">Más información</button>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-light-ivory w-[620px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <div className="border-t-intense-orange mt-16 py-4 border-t-8">
            <h2 className="flex-2 text-4xl text-center font-ifc-insane-rodeo-bold text-fire-red">Fiestas Infantiles</h2>
          </div>
          <div className="flex mb-4 gap-10 px-20">
            <div className="flex flex-col gap-3">
              <header className="flex flex-col text-center justify-center">
                <h2 className="font-ifc-insane-rodeo-bold text-9xl text-intense-orange">-</h2>
                <h2 className="text-intense-orange text-2xl font-bold">¿Quieres celebrar por lo alto?</h2>
              </header>
              <div>
                <p className="text-chocolate-brown text-center text-sm">
                  Del rodeo y Unión Recreativa hacen de tu fiesta una fecha inolvidable, con
                  recreación dirigida, música, decoración temática, pintucaritas, Globoflexia y
                  mucho más. ¡Qué esperas para celebrar junto a nosotros
                </p>
              </div>

            </div>
          </div>
          <footer className="flex justify-center px-20 pb-20">
            <button className="px-9 py-2 bg-vibrant-yellow text-xl font-bold text-chocolate-brown">
              Contiza y reserva aquí
            </button>
          </footer>
        </div>
      </Modal>
    </>
  )
}
