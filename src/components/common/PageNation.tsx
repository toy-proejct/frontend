import { useRouter } from "next/router"
import React from "react"
import styled from "styled-components"

type PageNationType = {
  onePageMaxData: number
  dataLength: number
  currentPage: number
}

type PagenationListType = {
  text: number
  active: boolean
}

export default function PageNation({ onePageMaxData, dataLength, currentPage }: PageNationType) {
  const router = useRouter()
  const { pathname } = router
  const pangenationLastPageNumber = Math.ceil(dataLength / onePageMaxData)
  const pagenationContents = Array.from(
    { length: pangenationLastPageNumber },
    (e, index) => index + 1,
  )
  const onClickPagenationArrowBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (event.currentTarget.textContent === "<") {
      if (currentPage === 1) return
      router.push(`${pathname}?page=${currentPage - 1}`)
    }
    if (event.currentTarget.textContent === ">") {
      if (currentPage === pangenationLastPageNumber) return
      router.push(`${pathname}?page=${currentPage + 1}`)
    }
  }
  return (
    <StyledPageNationWrapper>
      <li>
        <StyledPageNationArrowBtn onClick={onClickPagenationArrowBtn} notActive={currentPage === 1}>
          {"<"}
        </StyledPageNationArrowBtn>
      </li>
      {pagenationContents.map((content) => (
        <PageNationList
          key={content}
          text={content}
          active={content === currentPage ? true : false}
        />
      ))}
      <li>
        <StyledPageNationArrowBtn
          onClick={onClickPagenationArrowBtn}
          notActive={currentPage === pangenationLastPageNumber}
        >
          {">"}
        </StyledPageNationArrowBtn>
      </li>
    </StyledPageNationWrapper>
  )
}

function PageNationList({ text, active }: PagenationListType) {
  const router = useRouter()
  const { pathname } = router
  const onClickPagenationBtn = () => {
    if (!active) {
      router.push(`/${pathname}?page=${text}`)
    }
  }
  return (
    <StyledPageNationList active={active}>
      <button onClick={onClickPagenationBtn}>{text}</button>
    </StyledPageNationList>
  )
}

const StyledPageNationArrowBtn = styled.button<{ notActive: boolean }>`
  font-size: 1.3rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #cbcbcb;
  font-family: monospace;
  font-weight: 300;
  color: #7a7a7a;
  margin: 0 0.5rem;
  ${({ notActive }) =>
    notActive && "cursor:default; background:rgb(247,249,250);color:rgb(194,202,211)"};
`

const StyledPageNationWrapper = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const StyledPageNationList = styled.li<{ active?: boolean }>`
  button {
    font-weight: 500;
    ${({ active }) => active && "background: rgb(53, 197, 240);color:white;"};
    padding: 0.5rem 0.7rem;
    margin: 0 0.2rem;
    border-radius: 4px;
    &:hover {
      ${({ active }) =>
        active ? "background:rgb(44 165 201);" : " background: rgb(226 226 226);"};
    }
  }
`
