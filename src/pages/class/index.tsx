import React, { useRef } from "react"
import styled from "styled-components"
import ClassCateroy from "src/components/class/ClassCateroy"
import ClassReview from "src/components/class/ClassReview"

export default function Class() {
  const refMain = useRef<HTMLDivElement>(null)

  return (
    <StyledMain ref={refMain}>
      <StyledMainWrapper>
        <ClassCateroy />
        <ClassReview />
      </StyledMainWrapper>
    </StyledMain>
  )
}

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
