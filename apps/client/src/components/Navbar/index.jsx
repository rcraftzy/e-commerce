import { NavLink } from "react-router-dom"
import { DropdownMenu } from "./DropdownMenu"
import { HamburguesaIcon } from "../Icons"

export const links = [
  {
    label: "Menú",
    to: "menu"
  },
  {
    label: "Restaurantes",
    to: "restaurantes"
  },
  {
    label: "Eventos",
    to: "eventos"
  },
  {
    label: "Nosotros",
    to: "nosotros"
  },
  {
    label: "Contáctenos",
    to: "contactenos"
  }
]

export const Navbar = () => {
  const baseLinkClass = "text-lg border-b-4 hover:text-intense-orange hover:border-intense-orange text-chocolate-brown font-bold transition ease"
  const linkClass = `${baseLinkClass} border-intense-orange text-intense-orange`

  return (
    <header className="fixed w-full z-40 bg-light-ivory">
      <div className="mx-auto max-w-5xl flex justify-between">
        <div className="h-24 sm:h-28 md:h-32 flex items-center">
          <NavLink to="">
            <img className="w-48 sm:w-64" src="/assets/LOGO-PW.png" alt="Logo" />
          </NavLink>
        </div>
        <nav className="hidden md:inline-flex">
          <ul className="flex flex-row items-center">
            {links.map(({label, to}) => (
              <li key={label} className="mx-2.5">
                <NavLink 
                  to={to} 
                  className={({ isActive }) =>
                    isActive ? linkClass : `${baseLinkClass} border-transparent`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="ml-2 h-full bg-fire-red flex items-center">
              <a href="" className="flex flex-col justify-center px-9 gap-1">
                <div className="w-20 h-auto fill-white">
                  <HamburguesaIcon />
                </div>
                <span className="text-center font-bold text-white">Pide aquí</span>
              </a>
            </li>
          </ul>
        </nav>
        <DropdownMenu />
        <div className="hidden">
          Pide aquí
        </div>
      </div>
    </header>
  )
}
