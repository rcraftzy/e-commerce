import { Header } from "../Header"
import { Button } from "../buttons"

export const Dashboard = () => {
  return (
    <section id="dashboard">
      <Header title={"dashboard"}>
        <Button className={"border-fire-red text-fire-red"}>
          Calendario
        </Button>
      </Header>
    </section>
  )
}
