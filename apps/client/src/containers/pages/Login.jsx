import { NavLink } from "react-router-dom"
import { EstrellaIcon } from "../../components"

export const Login = () => {
  return (
    <div className="p-4 max-w-xl mx-auto min-h-screen flex flex-col items-center place-content-center">
      <header className="flex flex-col justify-center mb-10">
        <div className="h-48 flex justify-center">
          <img src="/assets/LOGO-PW.png" className="h-64" alt=""/>
        </div>
        <header className="gap-6 sm:gap-16 flex justify-between items-center">
          <div className="w-6 fill-intense-orange">
            <EstrellaIcon />
          </div>
        <h2 className="font-ifc-insane-rodeo-bold text-center text-fire-red text-5xl sm:text-6xl">Hola de nuevo</h2>
          <div className="w-6 sm:w-8 fill-intense-orange">
            <EstrellaIcon />
          </div>
        </header>
        <h4 className="text-chocolate-brown text-center font-bold">inicia sesión para continuar</h4>
      </header>
      <form className="flex flex-col gap-3">
        <input placeholder="Email" className="w-[300px] rounded-full text-chocolate-brown border-2 border-fire-red pl-4 bg-light-ivory"></input>
        <input placeholder="Contraseña*" className="mb-8 text-chocolate-brown rounded-full border-2 border-fire-red pl-4 bg-light-ivory"></input>
<NavLink to="/admin/" className="text-chocolate-brown bg-vibrant-yellow px-11 py-4 text-center text-lg font-bold">Iniciar sesión</NavLink>
      </form>
    </div>
  )
}
