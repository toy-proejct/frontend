import React from "react"
import { useRouter } from "next/router"

export default function BoardId() {
  const router = useRouter()
  const { boardId } = router.query
  return (
    <div>
      <h2>Dynamic Route</h2>
      <h2>{boardId}</h2>
    </div>
  )
}
