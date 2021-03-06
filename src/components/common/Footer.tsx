import React from "react"
import Image from "next/image"
import footerLogo from "/public/statics/footer/footerLogo.png"
import styled from "styled-components"
import Link from "next/link"

type FooterLinkListType = {
  name: string
  href: string
}

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <Link href="/">
          <a>
            <Image src={footerLogo} width={650} height={65} alt="logo"></Image>
          </a>
        </Link>
      </div>
      <StyledTeamTitle>⭐ TEAM ⭐</StyledTeamTitle>
      <StyledTeamWrapper>
        <FooterLinkList name="Hyebin" href="https://github.com/hyebin-Hwang" />
        <FooterLinkList name="Sungwun" href="https://github.com/yaulhae" />
        <FooterLinkList name="Minggu" href="https://github.com/minha9012" />
        <FooterLinkList name="Minhyung" href="https://github.com/rkdals213" />
        <FooterLinkList name="Solar" href="https://github.com/test14234" />
      </StyledTeamWrapper>
    </StyledFooter>
  )
}

// 아이디랑 링크 받기
const FooterLinkList = ({ name, href }: FooterLinkListType) => {
  return (
    <li>
      <StyledTeamLink href={href}>{name}</StyledTeamLink>
    </li>
  )
}

const StyledFooter = styled.footer`
  width: 100%;
  background: rgb(28, 28, 28);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  color: white;
  ${({ theme }) => theme.maxMedia.smallMobile} {
    img {
      width: 300px !important;
    }
  }
`

const StyledTeamLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const StyledTeamTitle = styled.h3`
  font-size: 1.5rem;
  padding: 2rem 0;
  ${({ theme }) => theme.maxMedia.smallMobile} {
    font-size: 1.1rem;
    padding: 1rem 0;
  }
`

const StyledTeamWrapper = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`
