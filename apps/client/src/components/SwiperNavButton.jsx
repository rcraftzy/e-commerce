import { useSwiper } from "swiper/react"
import { ChevronLeft, ChevronRight } from "./Icons"

export const SwiperNavButton = () => {
  const swiper = useSwiper()
  return (
    <div className="absolute inset-x-0 z-10 top-1/2">
      <button className="absolute z-30 left-0" onClick={() => swiper.slidePrev()}>
        <div className="w-7">
          <ChevronLeft />
        </div>
      </button>
      <button className="absolute z-30 right-0" onClick={() => swiper.slideNext()}>
        <div className="w-7">
          <ChevronRight />
        </div>
      </button>
    </div>
  )
}
