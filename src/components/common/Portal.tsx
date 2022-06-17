import ReactDOM from "react-dom"
import React, { useEffect, useState } from "react"

type Props = {
  children: React.ReactNode
}

export default function Portal({ children }: Props) {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
    return () => setMount(false)
  }, [])

  return mount ? ReactDOM.createPortal(children, document.getElementById("portal")!) : null
}
