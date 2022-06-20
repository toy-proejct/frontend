import Link from "next/link"
import React from "react"
import styled from "styled-components"
import { Flex } from "../shared/Flex"
import HomeProductGrid from "./HomeProductGrid"

export default function HomeProduct() {
  return (
    <HomeProductContainer>
      <HomeProductHeader space="evenly" axis="horizontal" alignment="center">
        <HomeProductTitle>최신 상품</HomeProductTitle>
        <Link href="/products" passHref>
          <LinkText>전체보기</LinkText>
        </Link>
      </HomeProductHeader>
      <HomeProductGrid />
    </HomeProductContainer>
  )
}

const HomeProductContainer = styled.section`
  padding: 2rem 0;
`

const HomeProductHeader = styled(Flex).attrs({
  space: "evenly",
  axis: "horizontal",
  alignment: "center",
})``

const HomeProductTitle = styled.h2``

const LinkText = styled.a`
  color: #919191;
  text-decoration: underline;
  cursor: pointer;
`
