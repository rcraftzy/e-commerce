import { Navigator, Sidebar } from '../../components'

export const FullAdminLayout = ({children}) => {
  return (
    <>
      <Navigator />
      <main className="relative pt-[120px] mx-auto max-w-4xl">
        <Sidebar />
        <section className='absolute z-0 pl-[120px] inset-x-0'>
        {children} 
        </section>
      </main>  
    </>
  )
}

