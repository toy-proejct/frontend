import React from "react"
import Image from "next/image"
import styled from "styled-components"
import main from "public/statics/main/main.png"
import HomeProduct from "src/components/home/HomeProduct"
import HomeGongbang from "src/components/home/HomeGongbang"
import Script from "next/script"
import envs from "src/config/dotenv"
import SEO from "src/components/shared/SEO"
import { Center } from "src/components/shared/Center"

export default function Home() {
  return (
    <>
      <Script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></Script>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${envs.naverMapClientId}`}
        defer={false}
      ></Script>
      <SEO
        title="Value Board | 커스텀 키보드"
        description="커스텀 키보드 판매, 커뮤니티는 Keyboard Value로!"
        url="https://ceyboard.shop/"
        image=""
      />
      <HomeContainer>
        <Section>
          <Image src={main} layout="fill" objectFit="fill" alt="main image" priority />
        </Section>
        <HomeProduct />
        <HomeGongbang />
      </HomeContainer>
    </>
  )
}

const Section = styled(Center).attrs({ variant: "xwide" })`
  position: relative;
  height: 400px;
`

const HomeContainer = styled.main`
  margin: 0 auto;

  width: ${({ theme }) => theme.size.xLarge};
  ${({ theme }) => theme.maxMedia.notebook} {
    max-width: ${({ theme }) => theme.size.large};
  }
  ${({ theme }) => theme.maxMedia.tablet} {
    max-width: ${({ theme }) => theme.size.middle};
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    max-width: ${({ theme }) => theme.size.small};
  }
  ${({ theme }) => theme.maxMedia.smallMobile} {
    max-width: ${({ theme }) => theme.size.xsmall};
    padding-right: 1rem;
    padding-left: 1rem;
  }
  ${({ theme }) => theme.maxMedia.minimun} {
    width: 100%;
  }
`
