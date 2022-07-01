import styled from "styled-components"
import React from "react"
import KakaoLogo from "../../../public/statics/login/kakao-logo.png"
import GithubLogo from "../../../public/statics/login/github-logo.png"
import NaverLogo from "../../../public/statics/login/naver-logo.png"
import SocialLoginBtn from "./SocialLoginBtn"
import envs from "src/config/dotenv"

const SocialLoginBtns = () => {
  return (
    <SocialLoginBtnsContainer>
      <div className="social-login-btn">
        <div className="social-login-btn-container">
          <SocialLoginBtn
            href={`https://kauth.kakao.com/oauth/authorize?client_id=${envs.kakaoClientId}&redirect_uri=${envs.kakaoRedirecUri}&response_type=code`}
            social="카카오"
            img={KakaoLogo}
          />
          <SocialLoginBtn
            href={`https://nid.naver.com/oauth2.0/authorize?response_type=token&client_id=${envs.naverClientId}&redirect_uri=${envs.naverRedirecUri}&state=${envs.naverState}`}
            social="네이버"
            img={NaverLogo}
          />
          <SocialLoginBtn
            href={`https://github.com/login/oauth/authorize?client_id=${envs.githubClientId}&redirect_uri=${envs.githubRedirecUri}`}
            social="깃허브"
            img={GithubLogo}
          />
        </div>
      </div>
    </SocialLoginBtnsContainer>
  )
}

const SocialLoginBtnsContainer = styled.div`
  .social-login-btn {
    padding: 0 50px;

    &-container {
      .naver {
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
      .naver {
        #naverIdLogin {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`

export default SocialLoginBtns
