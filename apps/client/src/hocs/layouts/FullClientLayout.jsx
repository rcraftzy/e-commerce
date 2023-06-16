import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../../components'

export const FullClientLayout = () => {
  return (
    <section className='font-tahoma bg-light-ivory relative m-0 p-0 min-h-full min-w-full'>
      <Navbar />
      <main className='pt-24 sm:pt-28'>
        <Outlet />
      </main>
      <Footer />
    </section>
  )
}
