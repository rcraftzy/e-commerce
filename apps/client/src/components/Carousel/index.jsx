import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

export const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col z-0 sm:flex-row absolute inset-x-0 inset-y-0">
            <span className="absolute h-full inset-x-0 bg-[#00000030] inset-y-0"/>
            <img src="/assets/banners/Banner-4.png" 
              className="h-3/4 object-cover"
              alt="banner" />
          </div>
          <div className="mt-60 lg:mt-72 sm:pb-4 sm:pt-9 md:pt-5 mx-auto max-w-5xl px-11 sm:px-14">
            <section className="flex flex-col">
              <h3 className="flex justify-center z-10 sm:justify-start text-center font-ifc-insane-rodeo-bold text-3xl sm:text-[42px] md:text-5xl mb-2 text-light-gold drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">Nos encargamos de tu</h3>
              <div className="inline-flex items-center justify-center sm:justify-start h-11 mb-6">
                <span className="font-ifc-insane-rodeo-bold text-8xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)] mb-4">EVENTO</span>
              </div>
              <span className="flex justify-center sm:justify-start z-10 mb-14 sm:mb-5">
                <a className="text-chocolate-brown bg-vibrant-yellow px-11 py-4 text-sm font-bold">Consulta aqui</a>
              </span>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col z-0 sm:flex-row absolute inset-x-0 inset-y-0">
            <span className="absolute h-full inset-x-0 bg-[#00000030] inset-y-0"/>
            <img src="/assets/banners/Banner-4.png" 
              className="h-3/4 object-cover"
              alt="banner" />
          </div>
          <div className="mt-60 lg:mt-72 sm:pb-4 sm:pt-9 md:pt-5 mx-auto max-w-5xl px-11 sm:px-14">
            <section className="flex flex-col">
              <h3 className="flex justify-center z-10 sm:justify-start text-center font-ifc-insane-rodeo-bold text-3xl sm:text-[42px] md:text-5xl mb-2 text-light-gold drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">Nos encargamos de tu</h3>
              <div className="inline-flex items-center justify-center sm:justify-start h-11 mb-6">
                <span className="font-ifc-insane-rodeo-bold text-8xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)] mb-4">EVENTO</span>
              </div>
              <span className="flex justify-center sm:justify-start z-10 mb-14 sm:mb-5">
                <a className="text-chocolate-brown bg-vibrant-yellow px-11 py-4 text-sm font-bold">Consulta aqui</a>
              </span>
            </section>
          </div>
        </SwiperSlide>
     </Swiper>
    </>
  );
}
