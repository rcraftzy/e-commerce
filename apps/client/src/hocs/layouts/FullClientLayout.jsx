import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../../components'

export const FullClientLayout = () => {
  return (
    <>
      <Navbar />
      <main className='pt-24 sm:pt-28'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
