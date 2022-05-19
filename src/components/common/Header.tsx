import styled from "styled-components"
import React, { ReactNode, useState } from "react"
import Logo from "/public/statics/header/VB.svg"
import Image from "next/image"
import Link from "next/link"

type NavLinkType = {
  src: string
  active: boolean
  children?: ReactNode
  id: number
  text?: string
  onClickNavLink: (id: number) => void
}

const HeaderContainer = styled.div`
  border-bottom: 1px solid #ededed;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: ${({ theme }) => theme.size.xLarge};
    margin: 0 auto;
    padding: 10px 0;

    &-left {
      display: flex;
      align-items: center;

      .logo {
        margin-right: 35px;
      }
    }

    &-right {
      a {
        position: relative;
        display: inline-block;
        margin: 6px 10px 0;
        padding: 14px 6px;
        font-size: 14px;
        font-weight: bold;
        color: #424242;
        cursor: pointer;
      }
    }
  }
`

const Header: React.FC = () => {
  const [navCategory, setNavCategory] = useState([
    { id: 0, src: "/", active: false },
    {
      id: 1,
      src: "/community",
      text: "커뮤니티",
      active: false,
    },
    {
      id: 2,
      src: "/craftmap",
      text: "우리동네공방",
      active: false,
    },
    {
      id: 3,
      src: "/class",
      text: "커스텀클래스",
      active: false,
    },
    {
      id: 4,
      src: "/products",
      text: "판매",
      active: false,
    },
    {
      id: 5,
      src: "/chat",
      text: "채팅",
      active: false,
    },
  ])
  const onClickNavLink = (id: number) => {
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
  return (
    <HeaderContainer>
      <div className="nav">
        <div className="nav-left">
          <div className="logo">
            <NavLink
              src={navCategory[0].src}
              id={navCategory[0].id}
              onClickNavLink={onClickNavLink}
              active={navCategory[0].active}
            >
              <Image src={Logo} alt="로고" />
            </NavLink>
          </div>
          {navCategory.map(
            (item, idx) =>
              idx >= 1 && (
                <NavLink
                  src={item.src}
                  key={item.id}
                  active={item.active}
                  onClickNavLink={onClickNavLink}
                  id={item.id}
                  text={item.text}
                />
              ),
          )}
        </div>
        <div className="nav-right">
          <a>로그인</a>
          <a>회원가입</a>
        </div>
      </div>
    </HeaderContainer>
  )
}

function NavLink({ src, children, active, id, onClickNavLink, text }: NavLinkType) {
  const clickNavLink = () => {
    onClickNavLink(id)
  }
  return (
    <Link href={src}>
      <StyledNavLink active={active} onClick={clickNavLink}>
        {text ? text : children}
      </StyledNavLink>
    </Link>
  )
}

const StyledNavLink = styled.a<{ active: boolean }>`
  &:hover {
    color: #35c5f0;
  }
  position: relative;
  display: inline-block;
  margin: 6px 10px 0;
  padding: 14px 6px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  color: #424242;
  cursor: pointer;
  color: ${({ active }) => active && "#35c5f0"};
`
export default Header
