import React, { useRef } from "react"
import styled from "styled-components"
import ClassCateroy from "../../src/components/class/ClassCateroy"
import ClassReview from "../../src/components/class/ClassReview"

export default function Class() {
  const refMain = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (refMain.current !== null) {
  //     refMain.current.style.background = "black"
  //   }
  //   return () => {
  //     if (refMain.current !== null) {
  //       refMain.current.style.background = "white"
  //     }
  //   }
  // }, [])
  return (
    <StyledMain ref={refMain}>
      <StyledMainWrapper>
        <ClassCateroy />
        <ClassReview />
      </StyledMainWrapper>
    </StyledMain>
  )
}

// 백그라운드 transition 수정해야됨
const StyledMain = styled.main`
  transition: 1s background;
  background: black;
  width: 100%;
  color: white;
`

const StyledMainWrapper = styled.div`
  width: ${({ theme }) => theme.size.xLarge};
  margin: 0 auto;
`
