import React, { ReactElement } from "react"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
