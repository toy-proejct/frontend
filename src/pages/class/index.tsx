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
  ${({ theme }) => theme.maxMedia.notebook} {
    max-width: ${({ theme }) => theme.size.large};
  }
  ${({ theme }) => theme.maxMedia.tablet} {
    max-width: ${({ theme }) => theme.size.middle};
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    max-width: ${({ theme }) => theme.size.small};
  }
  ${({ theme }) => theme.maxMedia.smallMobile} {
    max-width: ${({ theme }) => theme.size.xsmall};
    padding-right: 1rem;
    padding-left: 1rem;
  }
  ${({ theme }) => theme.maxMedia.minimun} {
    width: 100%;
  }
`
