import { ReactElement, useState } from "react"
import styled from "styled-components"
import CheckGray from "../../../public/statics/login/check.svg"
import CheckRed from "../../../public/statics/login/red-check.svg"
import CircleCheckGray from "../../../public/statics/login/circle-check.svg"
import CircleCheckRed from "../../../public/statics/login/circle-check-red.svg"
import ArrowBottom from "../../../public/statics/login/arrow-bottom.svg"

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background: rgb(249, 249, 249);
  form {
    width: 570px;
    background: rgb(255, 255, 255);
    padding: 60px;
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px;
    h1 {
      margin-bottom: 45px;
      font-size: 30px;
      font-weight: bold;
      color: rgb(63, 63, 63);
    }

    .input-container {
      .name-input {
        margin-bottom: 1.875rem;
        border-bottom: 1px solid rgb(229, 229, 229);

        input {
          width: 100%;
          height: 3.75rem;
          padding: 0px;
          font-size: 1.3125rem;
          font-weight: 700;
          outline: none;
          appearance: none;
          border: none;
          &::placeholder {
            font-size: 1rem;
            font-family: "Noto Sans KR", sans-serif;
          }
        }
      }

      .birthday-input {
        display: flex;
        align-items: center;
        margin-bottom: 1.875rem;
        .input {
          flex: 1;
          border-bottom: 1px solid rgb(229, 229, 229);
        }
        .input input {
          width: 100%;
          height: 3.75rem;
          padding: 0px;
          font-size: 1.3125rem;
          font-weight: 700;
          border-bottom: 1px solid rgb(229, 229, 229);
          outline: none;
          appearance: none;
          border: none;
          &::placeholder {
            font-family: "Noto Sans KR", sans-serif;
            font-size: 1rem;
          }
        }

        .one-number-input {
          display: flex;
          align-items: center;
          flex: 1;
          input {
            border-bottom: 1px solid rgb(229, 229, 229) !important;
            width: 20%;
            height: 3.75rem;
            padding: 0px;
            font-size: 1.3125rem;
            font-weight: 700;
            outline: none;
            appearance: none;
            border: none;
          }
        }

        .line {
          width: 9px;
          height: 1px;
          margin: 0px 0.5rem;
          background-color: rgb(151, 151, 151);
          flex-shrink: 0;
          align-self: center;
        }
      }

      .phone-number-input {
        margin-bottom: 1.875rem;
        border-bottom: 1px solid rgb(229, 229, 229);
        input {
          width: 100%;
          height: 3.75rem;
          padding: 0px;
          font-size: 1.3125rem;
          font-weight: 700;
          border-bottom: 1px solid rgb(229, 229, 229);
          outline: none;
          appearance: none;
          border: none;
          &::placeholder {
            font-family: "Noto Sans KR", sans-serif;
            font-size: 1rem;
          }
        }
      }

      .phone-brand {
        margin-bottom: 1.875rem;
        border-bottom: 1px solid rgb(229, 229, 229);
        position: relative;
        input {
          width: 100%;
          height: 3.75rem;
          padding: 0px;
          font-size: 1.3125rem;
          font-weight: 700;
          border-bottom: 1px solid rgb(229, 229, 229);
          outline: none;
          appearance: none;
          border: none;
          &::placeholder {
            font-family: "Noto Sans KR", sans-serif;
            font-size: 1rem;
          }
        }
        .arrow-icon {
          position: absolute;
          right: 1em;
          top: 1em;
          width: 15px;
        }
      }
    }
    .checkbox-container {
      .checkbox-all {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 0px 1rem;
        border: 1.4px solid rgb(229, 229, 229);
        height: 3.5rem;
        border-radius: 5px;
        font-size: 0.875rem;
        font-weight: 700;
        color: rgb(25, 25, 25);
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: cent;
        margin-bottom: 1rem;
        .circle-check-all {
          width: 20px;
          height: 20px;
          margin-top: 0.125rem;
          margin-right: 1rem;
        }
      }

      .checkbox-list {
        margin-bottom: 3em;
        .checkbox-item {
          margin: 1.25rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 1rem;
          padding-right: 0.6875rem;
          .left {
            display: flex;
            align-items: center;
            .check-icon {
              margin-right: 1rem;
              img {
                height: 16px !important;
                width: 16px !important;
              }
            }

            p {
              font-size: 0.875rem;
              font-weight: 500;
              color: rgb(127, 127, 127);
              line-height: 1.14;
            }
          }
          .right {
            img {
              width: 16px !important;
              height: 16px !important;
            }
          }
        }
      }
      .submit-btn {
        display: inline-flex;
        width: 100%;
        height: 72px;
        border-radius: 6px;
        background-color: rgb(216, 12, 24);
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        font-size: 1.125rem;
        font-weight: 700;
        color: rgb(255, 255, 255);
        text-align: center;
      }
    }
  }
`

export default function Signup() {
  // const accessToken = useSelector(({ auth }) => auth.access_token)
  // console.log(accessToken)
  const [checkAll, setCheckAll] = useState(false)
  const [checkboxList, setCheckboxList] = useState([
    {
      checked: false,
      text: "VR 이용약관(필수)",
    },
    {
      checked: false,
      text: "개인정보 수집 이용 동의(필수)",
    },
    {
      checked: false,
      text: "휴대폰 본인확인서비스(필수)",
    },
    {
      checked: false,
      text: "개인정보 수집 이용 동의(선택)",
    },
    {
      checked: false,
      text: "위치정보 이용약관 동의(선택)",
    },
    {
      checked: false,
      text: "마케팅 수신 동의(선택)",
    },
    {
      checked: false,
      text: "개인정보 광고활용 동의(선택)",
    },
  ])

  // const onSubmitUserInfo = async (e) => {
  //   e.preventDefault()
  //   const userInfo = {
  //     memberRequest: {
  //       email: "",
  //       introduce: "안녕하세요 이성운입니다.",
  //       nickname: "야울해",
  //       password: "",
  //       phone: "010-4428-2228",
  //     },
  //     oauthRequest: {
  //       accessToken: accessToken,
  //       providerType: "KAKAO",
  //       snsId: "",
  //     },
  //   }
  //   try {
  //     const result = await client.post("/api/member/register", userInfo)
  //     console.log(result)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  return (
    <SignupContainer>
      <form className="form">
        <h1>본인 정보를 입력해주세요</h1>
        <div className="input-container">
          <div className="name-input">
            <input type="text" placeholder="이름" />
          </div>
          <div className="birthday-input">
            <div className="input">
              <input type="text" placeholder="생년월일" />
            </div>
            <div className="line" />
            <div className="one-number-input">
              <input type="text" />
              <div>●●●●●●</div>
            </div>
          </div>
          <div className="phone-number-input">
            <input type="text" placeholder="휴대폰번호" />
          </div>
          <div className="phone-brand">
            <input type="text" placeholder="통신사" />
            <div className="arrow-icon">
              <ArrowBottom />
            </div>
          </div>
        </div>
        <div className="checkbox-container">
          <div className="checkbox-all">
            <div className="circle-check-all">
              {checkAll ? <CircleCheckRed /> : <CircleCheckGray />}
            </div>
            <span>전체동의</span>
          </div>
          <ul className="checkbox-list">
            {checkboxList.map((item, index) => (
              <li className="checkbox-item" key={index}>
                <div className="left">
                  {item.checked ? (
                    <div className="check-icon">
                      <CheckRed />
                    </div>
                  ) : (
                    <div className="check-icon">
                      <CheckGray />
                    </div>
                  )}
                  <p>{item.text}</p>
                </div>
                <div className="right">
                  <ArrowBottom className="arrow-icon" />
                </div>
              </li>
            ))}
          </ul>
          <button className="submit-btn" type="submit">
            다음
          </button>
        </div>
      </form>
    </SignupContainer>
  )
}

Signup.getLayout = function getLayout(page: ReactElement) {
  return { page }
}
