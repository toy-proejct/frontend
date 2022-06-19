import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { HomeGongbangeGrid } from "./HomeGongbangGrid"

export default function HomeGongbang() {
  return (
    <HomeGongbangContainer>
      <HomeGongbangHeader>
        <HomeGongbangTitle>공방리스트</HomeGongbangTitle>
        <Link href="/craftmap">
          <a>전체보기</a>
        </Link>
      </HomeGongbangHeader>
      <HomeGongbangeGrid />
    </HomeGongbangContainer>
  )
}

const HomeGongbangContainer = styled.section`
  padding-bottom: 4rem;
`

const HomeGongbangTitle = styled.h2``

const HomeGongbangHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: end;
  a {
    color: #919191;
    text-decoration: underline;
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    font-size: 0.7rem;
  }
`
