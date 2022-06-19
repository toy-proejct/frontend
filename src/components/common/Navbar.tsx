import Link from "next/link"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { Flex } from "../shared/Flex"
import LogoIcon from "../../../public/statics/header/VB.svg"
import { useRouter } from "next/router"

type link = { id: number; href: string; text: string; active: boolean }
type NavGroupProps = {
  links: link[]
  onClickNav: (id: number) => void
}

export const Navbar = () => {
  const router = useRouter()
  const [navCategory, setNavCategory] = useState([
    {
      id: 0,
      href: "/community",
      text: "커뮤니티",
      active: false,
    },
    {
      id: 1,
      href: "/craftmap",
      text: "우리동네공방",
      active: false,
    },
    {
      id: 2,
      href: "/class",
      text: "커스텀클래스",
      active: false,
    },
    {
      id: 3,
      href: "/products",
      text: "판매",
      active: false,
    },
    {
      id: 4,
      href: "/chat",
      text: "채팅",
      active: false,
    },
  ])

  const onClickLogo = () => {
    const changedActiveNavCategory = navCategory.map((item) => {
      if (item.active) {
        return { ...item, active: false }
      }
      return item
    })
    setNavCategory(changedActiveNavCategory)
  }

  const onClickNav = (id: number) => {
    const changedActiveNavCategory = navCategory.map((item) => {
      if (item.id === id) {
        return { ...item, active: true }
      }
      if (item.active) {
        return { ...item, active: false }
      }
      return item
    })
    setNavCategory(changedActiveNavCategory)
  }

  useEffect(() => {
    const selectedCategory = navCategory.map((category, id) => {
      if (router.pathname.includes(category.href)) {
        return { ...category, active: true }
      }
      if (category.active) {
        return { ...category, active: false }
      }
      return category
    })
    setNavCategory(selectedCategory)
  }, [])

  return (
    <NavbarContainer space="30px" alignment="center">
      <Logo onClick={onClickLogo}>
        <Link href="/" passHref>
          <a>
            <LogoIcon />
          </a>
        </Link>
      </Logo>
      <NavGroup links={navCategory} onClickNav={onClickNav} />
    </NavbarContainer>
  )
}

const NavbarContainer = styled(Flex).attrs({ space: "30px", alignment: "center" })`
  ${({ theme }) => theme.maxMedia.mobile} {
    display: none;
  }
`

const NavGroup = ({ links, onClickNav }: NavGroupProps) => {
  return (
    <Flex space="10px" alignment="center">
      {links.map((link) => (
        <Link href={link.href} passHref key={link.id}>
          <StyledLink onClick={() => onClickNav(link.id)} active={link.active}>
            {link.text}
          </StyledLink>
        </Link>
      ))}
    </Flex>
  )
}

const Logo = styled.div``

const StyledLink = styled.a<{ active: boolean }>`
  margin: 0 10px;
  padding: 21px 5px 15px;
  font-size: 18px;
  line-height: 1;
  font-weight: bold;
  color: #2f3438;
  outline: none;
  color: ${(props) => props.active && "#35c5f0;"};
`
