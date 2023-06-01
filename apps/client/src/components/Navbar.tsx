const links = [
  {
    label: "Menú",
    to: ""
  },
  {
    label: "Restaurantes",
    to: ""
  },
  {
    label: "Eventos",
    to: ""
  },
  {
    label: "Nosotros",
    to: ""
  },
  {
    label: "Contáctenos",
    to: ""
  }
]

export const Navbar = () => {
  const baseLinkClass = "border-b-4 hover:border-black font-bold font-tahoma"
  const linkClass = `${baseLinkClass} border-black`

  return (
    <header className="flex justify-between mx-auto max-w-4xl">
      <div>
        icon
      </div>
      <nav>
        <ul className="flex flex-row">
          {links.map(({label}) => (
            <li key={label} className="mx-2.5">
              <a href="" className={linkClass}>{label}</a>
            </li>
          ))}
          <li>
            Pide aquí
          </li>
        </ul>
      </nav>
      <div className="hidden">
        Pide aquí
      </div>
    </header>
  )
}
