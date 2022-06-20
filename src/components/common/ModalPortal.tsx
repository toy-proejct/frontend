import { ReactNode, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
  children?: ReactNode
}

function ModalPortal({ children }: ModalProps) {
  const ref = useRef<Element | null>()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    if (document) {
      const dom = document.getElementById("root-modal")
      ref.current = dom
    }
  }, [])
  if (ref.current && mounted) {
    return createPortal(<div className="modal-container">{children}</div>, ref.current)
  }
  return null
}
export default ModalPortal
