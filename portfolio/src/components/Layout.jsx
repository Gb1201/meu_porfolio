import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: "40px", minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}