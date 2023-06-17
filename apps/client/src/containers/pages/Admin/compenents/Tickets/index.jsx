import { Header } from "../Header"
import { ButtonCreate, ButtonSearch } from "../buttons"

export const Tickets = () => {
  return (
    <section id="tickets">
      <Header title={"Codigos de descuento"}>
        <ButtonCreate />
        <ButtonSearch />
      </Header>
    </section>
  )
}
