import styled from "styled-components"
import React from "react"
import Logo from "/public/statics/header/VB.svg"
import KakaoLogo from "/public/statics/login/kakao-logo.png"
import NaverLogo from "/public/statics/login/naver-logo.png"
import GithubLogo from "/public/statics/login/github-logo.png"
import CancelBtn from "/public/statics/login/cancel-btn.png"
import Image from "next/image"

const LoginModalContainer = styled.div`
  .modal-background {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-white-box {
    padding: 40px 20px 20px 20px;
    background-color: rgb(247, 247, 247);
    width: 420px;
    border-radius: 8px;

    .modal-cancel-btn {
      cursor: pointer;
      display: flex;
      justify-content: right;
      img {
        width: 24px !important;
        height: 24px !important;
      }
    }

    .social-login-container {
      .logo {
        text-align: center;
        margin-bottom: 5px;
      }
      .text-content {
        h1 {
          font-size: 20px;
          line-height: 1.5;
          margin-bottom: 15px;
          text-align: center;
          font-weight: bold;
        }
        p {
          line-height: 1.5;
          margin-bottom: 35px;
          text-align: center;
          font-size: 14px;
        }
      }
      .social-login-btn {
        padding: 0 50px;

        &-container {
          .kakao,
          .naver,
          .github {
            padding: 0;
            width: 100%;
            height: 38px;
            box-shadow: rgb(0 0 0 / 5%) 0px 1px 7px 0px;
            background: rgb(255, 255, 255);
            text-align: center;
            border-radius: 4px;
            margin-bottom: 12px;
            position: relative;

            &-logo {
              position: absolute;
              top: calc(50% - 12px);
              left: 35px;
              width: 24px;
              height: 24px;
              background-size: cover;
              background-repeat: no-repeat;
            }

            span {
              display: block;
              font-size: 14px;
            }
          }
        }
      }
    }
    .customer-service {
      padding: 3.5rem 1em 0.5rem;
      font-size: 12px;
      line-height: 1.5;
      color: rgb(153, 153, 153);
      > p {
        width: 100%;
        border-top: 1px solid rgb(229, 229, 229);
        padding-top: 1rem;
        span {
          text-decoration: underline;
          color: rgb(102, 102, 102);
        }
      }
    }
  }
`

const LoginModal: React.FC = () => {
  return (
    <LoginModalContainer>
      <div className="modal-background">
        <div className="modal-white-box">
          <div className="modal-cancel-btn">
            <Image src={CancelBtn} />
          </div>
          <div className="social-login-container">
            <div className="logo">
              <Image src={Logo} />
            </div>
            <div className="text-content">
              <h1>Value Board로 중고거래 시작하기</h1>
              <p>간편하게 가입하고 상품을 확인하세요</p>
            </div>
            <div className="social-login-btn">
              <div className="social-login-btn-container">
                <button className="kakao">
                  <div className="kakao-logo">
                    <Image src={KakaoLogo} />
                  </div>
                  <span>카카오로 이용하기</span>
                </button>
                <button className="naver">
                  <div className="naver-logo">
                    <Image src={NaverLogo} />
                  </div>
                  <span>네이버로 이용하기</span>
                </button>
                <button className="github">
                  <div className="github-logo">
                    <Image src={GithubLogo} />
                  </div>
                  <span>깃허브로 이용하기</span>
                </button>
              </div>
            </div>
          </div>
          <div className="customer-service">
            <p>
              도움이 필요하면<span>이메일</span> 또는 고객센터1670-2910로 문의 부탁드립니다.고객센터
              운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
            </p>
          </div>
        </div>
      </div>
    </LoginModalContainer>
  )
}

export default LoginModal
