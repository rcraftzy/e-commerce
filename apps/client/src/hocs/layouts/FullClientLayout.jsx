import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../../components'

export const FullClientLayout = () => {
  return (
    <section className='font-tahoma bg-light-ivory relative m-0 p-0 min-h-full min-w-full'>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  )
}
