import { NavLink } from "react-router-dom"

export const Login = () => {
  return (
    <div className="pt-28 max-w-xs mx-auto">
      <header className="flex flex-col justify-center mb-14">
        <img src="/assets/LOGO-PW.png" alt=""/>
        <h2 className="font-ifc-insane-rodeo-bold text-center text-fire-red text-5xl">Hola de nuevo</h2>
        <h4 className="text-chocolate-brown text-center font-bold">inicia sesión para continuar</h4>
      </header>
      <form className="flex flex-col gap-2">
        <input placeholder="Email" className="rounded-full border-2 border-fire-red pl-4 bg-light-ivory"></input>
        <input placeholder="Contraseña*" className="mb-11 rounded-full border-2 border-fire-red pl-4 bg-light-ivory"></input>
<NavLink to="/admin/" className="text-chocolate-brown bg-vibrant-yellow px-11 py-4 text-center text-lg font-bold">Iniciar sesión</NavLink>
      </form>
    </div>
  )
}
