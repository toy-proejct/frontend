import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import main from "../public/statics/main/main.png"
import HomeProduct from "../src/components/home/HomeProduct"
import HomeGongbang from "../src/components/home/HomeGongbang"
export default function Home() {
  return (
    <>
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
    </>
  )
}

const StyledMainContainer = styled.main`
  width: ${({ theme }) => theme.size.xLarge};
  margin: 0 auto;
`
