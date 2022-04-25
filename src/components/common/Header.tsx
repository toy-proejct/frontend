import styled from "styled-components"
import React from "react"
import Link from "next/link"
import logo from "../public/statics/VB.svg"

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

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="nav">
        <div className="nav-left">
          <div className="logo">
            <Link href="/">
              <a className="homeLink">
                <img src="/statics/header/VB.svg" alt="로고" />
              </a>
            </Link>
          </div>
          <a style={{ color: "#35c5f0" }}>커뮤니티</a>
          <a>우리동네공방</a>
          <Link href="/class">
            <a>커스텀클래스</a>
          </Link>
        </div>
        <div className="nav-right">
          <a>로그인</a>
          <a>회원가입</a>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header
