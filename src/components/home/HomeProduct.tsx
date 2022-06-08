import Link from "next/link"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ProductList from "../common/ProductList"
import ProductData from "./data/productDummy"
import throttle from "lodash/throttle"

export default function HomeProduct() {
  const [itemNumberPerWidth, setItemNumberPerWidth] = useState<4 | 8>(8)
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setItemNumberPerWidth(4)
    } else {
      setItemNumberPerWidth(8)
    }
  }
  useEffect(() => {
    if (window.innerWidth <= 767) {
      setItemNumberPerWidth(4)
    }
    window.addEventListener("resize", throttle(handleResize, 1000))

    return () => window.removeEventListener("resize", throttle(handleResize, 1000))
  }, [])
  return (
    <StyledContainer>
      <StyledTitleWrapper>
        <h2>최신 상품</h2>
        <Link href="/products" passHref>
          <StyledTitleLink>전체보기</StyledTitleLink>
        </Link>
      </StyledTitleWrapper>
      <StyledContentWrapper>
        {ProductData.map((product, idx) => {
          if (idx < itemNumberPerWidth) {
            return <ProductList product={product} key={product.boardId} />
          }
        })}
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
  ${({ theme }) => theme.maxMedia.mobile} {
    font-size: 0.7rem;
  }
`

const StyledTitleLink = styled.a`
  color: #919191;
  text-decoration: underline;
  cursor: pointer;
`

const StyledContentWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  margin-left: -8px;
`
