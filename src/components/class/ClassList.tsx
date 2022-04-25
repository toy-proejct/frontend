import React from "react"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"

export default function ClassList() {
  return (
    <StyledClassList>
      <Link href="#">
        <a>
          <StyledImageWrapper>
            <Image src="/statics/main/KimGongbang.png" layout="fill" objectFit="scale-down" />
          </StyledImageWrapper>
          <StyledTextWrapper>
            <h3>커스텀 키보드 기초 강의</h3>
            <p className="classInfo classTitle">김김공방</p>
            <p className="classInfo">⭐⭐⭐⭐⭐(50명)</p>
            <p className="classInfo">💖 15</p>
            <p className="classPrice">150.000원</p>
          </StyledTextWrapper>
        </a>
      </Link>
    </StyledClassList>
  )
}

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 140px;
  background: white;
  position: relative;
`

const StyledClassList = styled.li`
  width: 29%;
  border-radius: 6px;
  margin: 2rem 0;
  &:hover {
    filter: brightness(0.8);
  }
`
const StyledTextWrapper = styled.div`
  padding: 0.7rem;
  padding-left: 0;
  border-top: 1px solid #bebebe;
  .classInfo {
    font-size: 0.8rem;
  }
  .classTitle {
    color: #888888;
    padding-top: 0.2rem;
  }
  .classPrice {
    padding-top: 0.2rem;
  }
`
