import LogoIcon from "../../../public/statics/header/VB.svg"
import MenuIcon from "../../../public/statics/header/bytesize_menu.svg"
import Link from "next/link"
import styled from "styled-components"

export default function MobileNav() {
  return (
    <MobileNavContainer>
      <MenuIcon width="25" height="25" />
      <Logo href="/" passHref>
        <LogoLink>
          <LogoIcon />
        </LogoLink>
      </Logo>
    </MobileNavContainer>
  )
}

const MobileNavContainer = styled.div`
  display: none;
  position: relative;
  width: 100%;
  ${({ theme }) => theme.maxMedia.mobile} {
    display: block;
  }
  svg {
    transform: scale(0.8);
  }
`

const Logo = styled(Link)``

const LogoLink = styled.a`
  position: absolute;
  top: 0;
  left: 45%;
  svg {
    transform: scale(0.7);
  }
`
