import { Header } from "../header"
import { Container } from "../container"
import { Navbar } from "@nextui-org/react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="div flex-2 p-4">
          <Navbar />
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </Container>
    </>
  )
}