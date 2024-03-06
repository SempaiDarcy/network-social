import { Header } from "../header"
import { Container } from "../container"

import { Outlet } from "react-router-dom"
import { Navbar } from "../nav-bar"

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="div flex-2 p-4">
          <Navbar/>
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </Container>
    </>
  )
}