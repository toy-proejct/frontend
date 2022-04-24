import React from "react"
import styled from "styled-components"
import Image from "next/image"
import test3 from "../../public/statics/main/test3.png"

import GongbangType from "../../src/types/gongbangType"
import Link from "next/link"

export default function GongbangList({ gongbang }: GongbangType) {
  const { name, detail, mail, kakaoId, number, link, image } = gongbang
  return (
    <StyledGongBangList>
      <Link href={link}>
        <StyledGongbangLink>
          <StyledImageWrapper>
            <Image src={image} layout="fill" objectFit="scale-down" />
          </StyledImageWrapper>
          <StyledTextWrapper>
            <h3>{name}</h3>
            <p className="info">{detail}</p>
            <p className="userInfo">이메일: {mail}</p>
            <p className="userInfo">{kakaoId && "카카오톡 아이디: " + kakaoId}</p>
            <p className="userInfo">전화번호: {number}</p>
          </StyledTextWrapper>
        </StyledGongbangLink>
      </Link>
    </StyledGongBangList>
  )
}

const StyledGongBangList = styled.li`
  flex: 0 0 48.3%;
  margin: 1rem 0;
  border: 1px solid #d8d8d8;
  border-radius: 7px;
  transition: 0.3s box-shadow;
  &:hover {
    box-shadow: 3px 5px 12px -7px #000000, 5px 5px 15px 5px rgb(0 0 0 / 0%);
  }
`

const StyledGongbangLink = styled.a`
  display: flex;
  cursor: pointer;
  height: 100%;
`

const StyledImageWrapper = styled.div`
  flex: 0 0 40%;
  position: relative;
`

const StyledTextWrapper = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  .info {
    padding: 0.4rem 0;
  }
  .userInfo {
    font-size: 0.9rem;
    color: #9c9c9c;
  }
  h3 {
    ${StyledGongbangLink}:hover & {
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-color: #343434;
    }
  }
`
