import React, { useEffect, useState } from "react"
import throttle from "lodash/throttle"

const useResize = (
  initialItemNumber: number,
  changedItemNumber: number,
  triggerSize: number,
  time: number,
) => {
  const [itemNumberPerWidth, setItemNumberPerWidth] = useState(initialItemNumber)

  const handleResize = () => {
    if (window.innerWidth <= triggerSize) {
      setItemNumberPerWidth(changedItemNumber)
    } else {
      setItemNumberPerWidth(initialItemNumber)
    }
  }
  useEffect(() => {
    if (window.innerWidth <= triggerSize) {
      setItemNumberPerWidth(changedItemNumber)
    }
    window.addEventListener("resize", throttle(handleResize, time))

    return () => window.removeEventListener("resize", throttle(handleResize, time))
  }, [])

  return itemNumberPerWidth
}

export default useResize
