import { Header } from "../Header"
import { ButtonCreate, ButtonSearch } from "../buttons"

export const Banners = () => {
  return (
    <section id="banners">
      <Header title={"Banners"}>
        <ButtonCreate />
        <ButtonSearch />
      </Header>
    </section>
  )
}
