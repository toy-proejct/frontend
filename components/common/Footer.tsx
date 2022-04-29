import React from "react"
import Image from "next/image"
import footerLogo from "../../public/statics/footer/footerLogo.png"
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
            <Image src={footerLogo} width={650}></Image>
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
    <StyledTeamList>
      <StyledTeamLink href={href}>{name}</StyledTeamLink>
    </StyledTeamList>
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
`

const StyledTeamLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const StyledTeamList = styled.li`
  padding: 0 0.8rem;
`

const StyledTeamTitle = styled.h3`
  font-size: 1.5rem;
  padding: 2rem 0;
`

const StyledTeamWrapper = styled.ul`
  display: flex;
`
