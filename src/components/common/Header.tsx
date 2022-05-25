import styled from "styled-components"
import React from "react"
import Logo from "../../../public/statics/header/VB.svg"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { changeModalSwitchTrue } from "src/redux/reducer/modal"
import LoginModal from "../login/LoginModal"
import { useSelector } from "src/util/hooks/useSelector"

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const modalSwitch = useSelector(({ modal }) => modal.switch)
  const onClickOpenModal = () => {
    dispatch(changeModalSwitchTrue())
  }
  return (
    <HeaderContainer>
      <div className="nav">
        <div className="nav-left">
          <div className="logo">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </div>
          <Link href="/community">
            <a>커뮤니티</a>
          </Link>
          <Link href="/craftmap">
            <a>우리동네공방</a>
          </Link>
          <Link href="/class">
            <a>커스텀클래스</a>
          </Link>
        </div>
        <div className="nav-right">
          <a onClick={onClickOpenModal}>로그인</a>
          <a>회원가입</a>
        </div>
      </div>
      {modalSwitch && <LoginModal />}
    </HeaderContainer>
  )
}

export default Header

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

      a {
        position: relative;
        display: inline-block;
        margin: 6px 10px 0;
        padding: 14px 6px;
        font-size: 18px;
        line-height: 26px;
        font-weight: 700;
        color: #424242;
        cursor: pointer;
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
