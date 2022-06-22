import React from "react"
import styled from "styled-components"
import { Grid } from "../shared/Grid"
import gongbangData from "./data/gongbangDummy"
import Image from "next/image"
import GongbangType from "src/types/gongbangType"
import Link from "next/link"

type GongbangListType = {
  gongbang: GongbangType
}

export default function HomeGongbangGrid() {
  return (
    <HomeGongbangGridContainer>
      {gongbangData.map((gongbang) => {
        return <GongbangList gongbang={gongbang} key={gongbang.id} />
      })}
    </HomeGongbangGridContainer>
  )
}

const HomeGongbangGridContainer = styled(Grid).attrs({
  gap: 20,
  colCount: 2,
  mColumnCount: 1,
})``

function GongbangList({ gongbang }: GongbangListType) {
  const { name, detail, mail, kakaoId, number, link, image } = gongbang
  return (
    <GongBangListWrapper>
      <Link href={link} passHref>
        <StyledGongbangLink>
          <GongbangListImg>
            <Image src={image} layout="fill" objectFit="scale-down" alt={name} />
          </GongbangListImg>
          <GongbangListTextWrapper>
            <h3>{name}</h3>
            <p className="info">{detail}</p>
            <p className="userInfo">이메일: {mail}</p>
            <p className="userInfo">{kakaoId && "카카오톡 아이디: " + kakaoId}</p>
            <p className="userInfo">전화번호: {number}</p>
          </GongbangListTextWrapper>
        </StyledGongbangLink>
      </Link>
    </GongBangListWrapper>
  )
}
/*의문 email 엘레멘트 같은 거를 Email 컴포넌트 단위로 만들면 좋은 점과 안 좋은 점이 뭘까? 텍스트 단위의 최소 컴포넌트가 있으면 좋겠는데*/

const GongBangListWrapper = styled.li`
  list-style: none;
  flex: 0 0 48.3%;
  margin: 1rem 0;
  border: 1px solid #d8d8d8;
  border-radius: 7px;
  transition: 0.3s box-shadow;
  &:hover {
    box-shadow: 3px 5px 12px -7px #000000, 5px 5px 15px 5px rgb(0 0 0 / 0%);
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    flex: 0 0 100%;
  }
`

const StyledGongbangLink = styled.a`
  display: flex;
  cursor: pointer;
  height: 100%;
`

const GongbangListImg = styled.div`
  flex: 0 0 40%;
  position: relative;
  ${({ theme }) => theme.maxMedia.mobile} {
    flex: 0 0 50%;
  }
`

const GongbangListTextWrapper = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  h3 {
    ${StyledGongbangLink}:hover & {
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-color: #343434;
    }
  }
  .info {
    padding: 0.4rem 0;
  }
  .userInfo {
    font-size: 0.9rem;
    color: #9c9c9c;
    ${({ theme }) => theme.maxMedia.mobile} {
      font-size: 0.6rem;
    }
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    font-size: 0.7rem;
  }
`
