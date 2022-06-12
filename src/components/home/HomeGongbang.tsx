import React from "react"
import styled from "styled-components"
import GongbangList from "../common/GongbangList"
import gongbangData from "./data/gongbangDummy"
import Link from "next/link"
import useResize from "src/hooks/useResize"

export default function HomeGongbang() {
  const itemNumberPerWidth = useResize(4, 2, 767, 1000)

  return (
    <StyledGongbangContainer>
      <StyledTitleWrapper>
        <h2>공방리스트</h2>
        <Link href="/craftmap">
          <a>전체보기</a>
        </Link>
      </StyledTitleWrapper>
      <StyledGongBangWrapper>
        {gongbangData.map((gongbang, idx) => {
          if (idx < itemNumberPerWidth) {
            return <GongbangList gongbang={gongbang} key={gongbang.id} />
          }
        })}
      </StyledGongBangWrapper>
    </StyledGongbangContainer>
  )
}

const StyledGongbangContainer = styled.section`
  padding-bottom: 4rem;
`

const StyledGongBangWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledTitleWrapper = styled.div`
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
