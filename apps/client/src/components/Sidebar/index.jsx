import { BurgerIcon } from "../Icons"

export const Sidebar = () => {
  return (
    <div className="fixed z-20">
      <aside className="bg-fire-red w-16 rounded-lg min-h-screen">
        <ul className="pt-4 flex flex-col gap-8">
          <li className="flex justify-center">
            <a href="#">
              <div className="w-10 fill-white">
                <BurgerIcon />
              </div>
            </a>
          </li>
          <li className="flex justify-center">
            <a href="#dashboard" className="pointer">
              <div className="w-10 fill-white">
                <BurgerIcon />
              </div>
            </a>
          </li>
          <li className="flex justify-center">
            <a href="#banners">
              <div className="w-10 fill-white">
                <BurgerIcon />
              </div>
            </a>
          </li>
          <li className="flex justify-center">
            <a href="#productos">
              <div className="w-10 fill-white">
                <BurgerIcon />
              </div>
            </a>
          </li>
          <li className="flex justify-center">
            <a href="#tickets">
              <div className="w-10 fill-white">
                <BurgerIcon />
              </div>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  )
}
