import React from "react"
import styled from "styled-components"
import GongbangList from "../common/GongbangList"
import gongbangData from "./data/gongbangDummy"
import Link from "next/link"

export default function HomeGongbang() {
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
          if (idx < 4) {
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
`
