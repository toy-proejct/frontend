import React, { ReactElement, useState } from "react"
import LoginModal from "../../login/LoginModal"
import Footer from "../../common/Footer"
import Header from "../../common/Header"

export default function Layout({ children }: { children: ReactElement }) {
  const [isModal, setIsModal] = useState(false)
  return (
    <>
      <Header />
      {children}
      <Footer />
      {isModal && <LoginModal />}
    </>
  )
}
