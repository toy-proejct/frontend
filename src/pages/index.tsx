import React from "react"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import main from "public/statics/main/main.png"
import HomeProduct from "src/components/home/HomeProduct"
import HomeGongbang from "src/components/home/HomeGongbang"
import Script from "next/script"

export default function Home() {
  return (
    <div>
      <Script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></Script>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        defer={false}
      ></Script>
      <Head>
        <title>Value Board | 커스텀 키보드</title>
        <meta name="description" content="커스텀 키보드 판매, 커뮤니티는 Keyboard Value로!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMainContainer>
        <section>
          <Image src={main} alt="main image" width={1100} height={400} priority />
        </section>
        <HomeProduct />
        <HomeGongbang />
      </StyledMainContainer>
    </div>
  )
}

const StyledMainContainer = styled.main`
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
    padding: 0 1rem;
  }
  ${({ theme }) => theme.maxMedia.minimun} {
    width: 100%;
  }
`
