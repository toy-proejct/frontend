import styled from "styled-components"
import React, { useState } from "react"
import Logo from "../../../public/statics/header/VB.svg"
import MenuIcon from "../../../public/statics/header/bytesize_menu.svg"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { changeModalSwitchTrue } from "src/redux/reducer/modal"
import LoginModal from "../login/LoginModal"
import { useSelector } from "src/util/hooks/useSelector"
import ModalPortal from "./ModalPortal"

type NavLinkType = {
  src: string
  active: boolean
  id: number
  text: string
  onClickNavLink: (id: number) => void
}

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const modalSwitch = useSelector(({ modal }) => modal.switch)
  const onClickOpenModal = () => {
    dispatch(changeModalSwitchTrue())
  }
  const [navCategory, setNavCategory] = useState([
    {
      id: 0,
      src: "/community",
      text: "커뮤니티",
      active: false,
    },
    {
      id: 1,
      src: "/craftmap",
      text: "우리동네공방",
      active: false,
    },
    {
      id: 2,
      src: "/class",
      text: "커스텀클래스",
      active: false,
    },
    {
      id: 3,
      src: "/products",
      text: "판매",
      active: false,
    },
    {
      id: 4,
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

  const onClickLogo = () => {
    const changedActiveNavCategory = navCategory.map((item) => {
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
            <Link href="/">
              <a onClick={onClickLogo}>
                <Logo />
              </a>
            </Link>
          </div>
          {navCategory.map((item) => (
            <NavLink
              src={item.src}
              key={item.id}
              active={item.active}
              onClickNavLink={onClickNavLink}
              id={item.id}
              text={item.text}
            />
          ))}
        </div>
        <div className="mobile-nav-menu">
          <MenuIcon width="25" height="25" />
        </div>
        <div className="mobile-logo">
          <Logo />
        </div>
        <div className="nav-right">
          <a onClick={onClickOpenModal}>로그인</a>
          <a>회원가입</a>
        </div>
      </div>
      {modalSwitch && (
        <ModalPortal>
          <LoginModal />
        </ModalPortal>
      )}
    </HeaderContainer>
  )
}

function NavLink({ src, active, id, onClickNavLink, text }: NavLinkType) {
  const clickNavLink = () => {
    onClickNavLink(id)
  }
  return (
    <Link href={src} passHref>
      <StyledNavLink active={active} onClick={clickNavLink}>
        {text}
      </StyledNavLink>
    </Link>
  )
}

const HeaderContainer = styled.div`
  border-bottom: 1px solid #ededed;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: ${({ theme }) => theme.size.xLarge};
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
    }
    ${({ theme }) => theme.maxMedia.minimun} {
      width: 100%;
      padding-right: 1rem;
      padding-left: 1rem;
    }
    margin: 0 auto;
    padding: 10px 0;
    &-left {
      display: flex;
      align-items: center;

      .logo {
        margin-right: 35px;
      }
      ${({ theme }) => theme.maxMedia.mobile} {
        display: none;
      }
    }

    .mobile-nav-menu {
      display: none;
      ${({ theme }) => theme.maxMedia.mobile} {
        display: block;
      }
    }

    .mobile-logo {
      position: absolute;
      left: 44%;
      display: none;
      ${({ theme }) => theme.maxMedia.mobile} {
        display: block;
      }
    }

    &-right {
      a {
        position: relative;
        display: inline-block;
        margin: 6px 10px 0;
        padding: 14px 0px;
        font-size: 14px;
        font-weight: bold;
        color: #424242;
        cursor: pointer;
        ${({ theme }) => theme.maxMedia.mobile} {
          font-size: 13px;
          margin: 0;
          padding: 0;
          font-weight: 400;

          &:nth-child(2) {
            margin-left: 4px;
          }
        }
      }
    }
  }
`

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
