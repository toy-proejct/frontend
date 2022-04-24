import Link from "next/link"
import React from "react"
import styled from "styled-components"
import ProductList from "../common/ProductList"
import ProductData from "./data/productDummy"

export default function HomeProduct() {
  return (
    <StyledContainer>
      <StyledTitleWrapper>
        <h2>최신 상품</h2>
        <Link href="#">
          <StyledTitleLink>전체보기</StyledTitleLink>
        </Link>
      </StyledTitleWrapper>
      <StyledContentWrapper>
        {ProductData.map((product) => (
          <ProductList product={product} key={product.boardId} />
        ))}
      </StyledContentWrapper>
    </StyledContainer>
  )
}

const StyledContainer = styled.section`
  padding: 2rem 0;
`

const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`

const StyledTitleLink = styled.a`
  color: #919191;
  text-decoration: underline;
  cursor: pointer;
`

const StyledContentWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
`
