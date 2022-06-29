import styled from "styled-components"
import React from "react"
import LogoIcon from "../../../public/statics/header/VB.svg"
import { onClickIsLoginModalFalse } from "src/redux/reducer/modal"
import Modal from "../common/Modal"
import SocialLoginBtns from "./SocialLoginBtns"
import CustomerService from "./CustomerService"

export default function LoginModal() {
  return (
    <>
      <LoginModalContainer>
        <Modal onClickExitBtn={onClickIsLoginModalFalse}>
          <div className="logo">
            <LogoIcon />
          </div>
          <div className="text-content">
            <h1>Value Board로 중고거래 시작하기</h1>
            <p>간편하게 가입하고 상품을 확인하세요</p>
          </div>
          <SocialLoginBtns />
          <CustomerService />
        </Modal>
      </LoginModalContainer>
    </>
  )
}

const LoginModalContainer = styled.div`
  .logo {
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
  }
  .text-content {
    margin-bottom: 35px;
    h1 {
      font-size: 20px;
      line-height: 1.5;
      margin-bottom: 15px;
      text-align: center;
      font-weight: bold;
    }
    p {
      line-height: 1.5;
      text-align: center;
      font-size: 14px;
    }
  }
`
