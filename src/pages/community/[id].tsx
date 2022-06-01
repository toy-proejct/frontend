import styled from "styled-components"
import { useState } from "react"
import Profile from "../../../public/statics/craftmap/craft-shop.jpg"
import CommentProfile from "../../../public/statics//community/[id]/avatar.png"
import IconCamera from "../../../public/statics/community/[id]/ant-design_camera-filled.svg"
import Image from "next/image"

export default function CommunityItem() {
  const [otherQuestions, setOtherQuestions] = useState([
    {
      id: "1",
      title: "이렇게 생긴 가림막이 있나요??",
      content:
        "신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요",
      profile_img: "https://ifh.cc/g/y8DZkS.jpg",
      writer: "이성운72",
      created: "21분전",
      comment_count: 6,
      view_count: 10,
      hashtags: ["디자인추천", "소파", "식탁", "20평대", "거실"],
      img_url: "https://ifh.cc/g/y8DZkS.jpg",
    },
    {
      id: "2",
      title: "이렇게 생긴 가림막이 있나요??",
      content:
        "신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요",
      profile_img: "https://ifh.cc/g/y8DZkS.jpg",
      writer: "이성운72",
      created: "21분전",
      comment_count: 6,
      view_count: 10,
      hashtags: ["디자인추천", "소파", "식탁", "20평대", "거실"],
      img_url: "https://ifh.cc/g/y8DZkS.jpg",
    },
    {
      id: "3",
      title: "이렇게 생긴 가림막이 있나요??",
      content:
        "신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요",
      profile_img: "https://ifh.cc/g/y8DZkS.jpg",
      writer: "이성운72",
      created: "21분전",
      comment_count: 6,
      view_count: 10,
      hashtags: ["디자인추천", "소파", "식탁", "20평대", "거실"],
      img_url: "https://ifh.cc/g/y8DZkS.jpg",
    },
    {
      id: "4",
      title: "이렇게 생긴 가림막이 있나요??",
      content:
        "신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요",
      profile_img: "https://ifh.cc/g/y8DZkS.jpg",
      writer: "이성운72",
      created: "21분전",
      comment_count: 6,
      view_count: 10,
      hashtags: ["디자인추천", "소파", "식탁", "20평대", "거실"],
      img_url: "https://ifh.cc/g/y8DZkS.jpg",
    },
    {
      id: "5",
      title: "이렇게 생긴 가림막이 있나요??",
      content:
        "신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요",
      profile_img: "https://ifh.cc/g/y8DZkS.jpg",
      writer: "이성운72",
      created: "21분전",
      comment_count: 6,
      view_count: 10,
      hashtags: ["디자인추천", "소파", "식탁", "20평대", "거실"],
      img_url: "https://ifh.cc/g/y8DZkS.jpg",
    },
    {
      id: "6",
      title: "이렇게 생긴 가림막이 있나요??",
      content:
        "신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요",
      profile_img: "https://ifh.cc/g/y8DZkS.jpg",
      writer: "이성운72",
      created: "21분전",
      comment_count: 6,
      view_count: 10,
      hashtags: ["디자인추천", "소파", "식탁", "20평대", "거실"],
      img_url: "https://ifh.cc/g/y8DZkS.jpg",
    },
    {
      id: "7",
      title: "이렇게 생긴 가림막이 있나요??",
      content:
        "신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요",
      profile_img: "https://ifh.cc/g/y8DZkS.jpg",
      writer: "이성운72",
      created: "21분전",
      comment_count: 6,
      view_count: 10,
      hashtags: ["디자인추천", "소파", "식탁", "20평대", "거실"],
      img_url: "https://ifh.cc/g/y8DZkS.jpg",
    },
  ])
  const [questions, setQuestion] = useState({
    id: "1",
    title: "이렇게 생긴 가림막이 있나요??",
    content:
      "신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요",
    profile_img: "https://ifh.cc/g/y8DZkS.jpg",
    writer: "이성운72",
    created: "21분전",
    comment_count: 6,
    view_count: 10,
    hashtags: ["디자인추천", "소파", "식탁", "20평대", "거실"],
    img_url: "https://ifh.cc/g/y8DZkS.jpg",
    comment: [
      {
        id: 1,
        profile_img: "https://ifh.cc/g/y8DZkS.jpg",
        writer: "강이옥앙",
        content: "다시 요청하세요.",
        created: "4일 전",
      },
      {
        id: 2,
        profile_img: "https://ifh.cc/g/y8DZkS.jpg",
        writer: "옥앙강강이이",
        content:
          "재보수 할 때 꼭 다 뜯어내고 다시 시공하는지 확인하셔요! 저는 위에 덧방으오 시공해서 나중에 천장 벽지가 무너졌답니당🙊",
        created: "7일 전",
      },
      {
        id: 3,
        profile_img: "https://ifh.cc/g/y8DZkS.jpg",
        writer: "옥앙강강이이",
        content:
          "재보수 할 때 꼭 다 뜯어내고 다시 시공하는지 확인하셔요! 저는 위에 덧방으오 시공해서 나중에 천장 벽지가 무너졌답니당🙊",
        created: "7일 전",
      },
      {
        id: 4,
        profile_img: "https://ifh.cc/g/y8DZkS.jpg",
        writer: "옥앙강강이이",
        content:
          "재보수 할 때 꼭 다 뜯어내고 다시 시공하는지 확인하셔요! 저는 위에 덧방으오 시공해서 나중에 천장 벽지가 무너졌답니당🙊",
        created: "7일 전",
      },
      {
        id: 5,
        profile_img: "https://ifh.cc/g/y8DZkS.jpg",
        writer: "옥앙강강이이",
        content:
          "재보수 할 때 꼭 다 뜯어내고 다시 시공하는지 확인하셔요! 저는 위에 덧방으오 시공해서 나중에 천장 벽지가 무너졌답니당🙊",
        created: "7일 전",
      },
    ],
  })
  return (
    <CommunityItemContainer>
      <div className="post">
        <h4>질문과 답변</h4>
        <header className="post-info">
          <h1>{questions.title}</h1>
          <div className="post-info-writer">
            <div className="left">
              <div className="user-profile-img">
                <Image src={Profile} alt="프로필이미지" />
              </div>
              <div className="user-info">
                <p>{questions.writer}</p>
                <p>{questions.created}</p>
              </div>
            </div>
            <div className="right">
              <button>
                <b>+</b> 팔로우
              </button>
            </div>
          </div>
        </header>
        <main>
          {" "}
          <div
            className="post-content"
            dangerouslySetInnerHTML={{
              __html: `<p>안녕하세요..
              저번주 금요일에 33평기준 28평으로 270만원 견저으로 도배햇어요.. 월요일에 가서 찍은사진인데
              너무하지않나요?긴글을 쓰다 갑자기 없어져서(저도 도통 모르겟네요)과정도썻엇는데..저는 참 여기에 질문이 많아도 너무많아 죄송하지만 제사연을아신분들은 아실거라..이젠 정말손가락누를힘도없어요 한달동안 스트레스때문에 머리카락 몸무게..답변감사하겟습니다..</p><img src="https://ifh.cc/g/y8DZkS.jpg" /><img src="https://ifh.cc/g/xtvhmj.png" /><img src="https://ifh.cc/g/tPAOwb.jpg" />`,
            }}
          />
          <div className="tag">
            <div className="tag-container">
              {questions.hashtags.map((item, index) => (
                <span key={index}>#{item}</span>
              ))}
            </div>
          </div>
          <p className="view-count">
            조회<b>{questions.view_count}</b>
          </p>
          <hr />
          <div className="comment">
            <div className="comment-count">
              <h1>
                댓글 <span>56</span>
              </h1>
            </div>
            <form className="comment-input-container">
              <div className="profile-img">
                <Image src={CommentProfile} alt="댓글프로필이미지" />
              </div>
              <div className="comment-input">
                <input type="text" placeholder="댓글을 남겨 보세요" />
                <div className="submit-button">
                  <IconCamera />
                  <button type="submit">입력</button>
                </div>
              </div>
            </form>
            <div className="comment-container">
              {questions.comment.map((item, index) => (
                <div className="comment-item" key={item.id}>
                  <div className="left">
                    <div
                      className="profile-img"
                      style={{ background: `url(${item.profile_img})` }}
                    ></div>
                  </div>
                  <div className="right">
                    <h3>{item.writer}</h3>
                    <p>{item.content}</p>
                    <div className="comment-info-created">
                      <span>{item.created}</span>
                      <i />
                      <span>♡좋아요</span>
                      <i />
                      <span>답글 달기</span>
                      <i />
                      <span>신고</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <hr className="second-hr" />
      <div className="other-post">
        <h1>비슷한 질문과 답변</h1>
        <ul className="other-post-container">
          {otherQuestions.map((item, index) => (
            <li className="other-post-item" key={item.id}>
              <div className="left">
                <h1>{item.title}</h1>
                <p className="other-post-description">{item.content}</p>
                <div className="user-info-created-container">
                  <div className="user-info">
                    <div
                      className="profile-img"
                      style={{ background: `url(${item.profile_img})` }}
                    ></div>
                    <span>{item.writer}</span>
                  </div>
                  <div className="created">
                    <span>{item.created}</span>
                    <span>
                      댓글<b className="view-count">{item.comment_count}</b>
                    </span>
                    <span>
                      조회<b>{item.view_count}</b>
                    </span>
                  </div>
                </div>
                <ul className="hashtag-container">
                  {item.hashtags.map((item, index) => (
                    <li className="hashtag-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="right">
                <div className="post-img" style={{ background: `url(${item.img_url})` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CommunityItemContainer>
  )
}

const CommunityItemContainer = styled.div`
  padding-top: 35px;

  hr {
    margin: 0px;
    padding: 0px;
    height: 10px;
    border: none;
    background-color: rgb(247, 249, 250);
    ${({ theme }) => theme.minMedia.mobile} {
      height: 1px;
      background-color: rgb(234, 237, 239);
    }
  }

  .post {
    ${({ theme }) => theme.minMedia.mobile} {
      width: 720px;
      margin: 0 auto;
    }

    h4 {
      padding: 0 16px;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      color: rgb(101, 110, 117);

      ${({ theme }) => theme.minMedia.mobile} {
        font-size: 16px;
      }
    }
    header {
      padding: 0 16px;
      margin-bottom: 30px;

      ${({ theme }) => theme.minMedia.mobile} {
        margin-bottom: 60px;
      }
      &.post-info {
        h1 {
          margin: 2px 0px 17px;
          font-size: 18px;
          line-height: 24px;
          color: rgb(47, 52, 56);
          font-weight: 700;

          ${({ theme }) => theme.minMedia.mobile} {
            margin: 15px 0px 32px;
            font-size: 32px;
            line-height: 42px;
          }
        }
        .post-info-writer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left {
            display: flex;
            .user-profile-img {
              width: 40px;
              height: 40px;
              margin-right: 6px;
              ${({ theme }) => theme.minMedia.mobile} {
                width: 50px;
                height: 50px;
              }
              span {
                border-radius: 50%;
              }
            }
            .user-info {
              p:nth-child(1) {
                font-size: 12px;
                line-height: 20px;
                font-weight: 600;
                color: rgb(47, 52, 56);
                ${({ theme }) => theme.minMedia.mobile} {
                  font-size: 16px;
                }
              }
              p:nth-child(2) {
                display: block;
                font-size: 12px;
                line-height: 20px;
                color: rgb(101, 110, 117);

                ${({ theme }) => theme.minMedia.mobile} {
                  margin-top: 8px;
                  font-size: 16px;
                }
              }
            }
          }
          .right {
            button {
              display: inline-block;
              border: none;
              background: none rgb(53, 197, 240);
              font-size: 14px;
              line-height: 20px;
              width: auto;
              height: 32px;
              border-radius: 4px;
              padding: 0px 8px;
              box-sizing: border-box;
              text-align: center;
              color: rgb(255, 255, 255);
              font-weight: 500;
              display: flex;
              align-items: center;
              b {
                font-size: 24px;
                padding-right: 8px;
              }

              ${({ theme }) => theme.minMedia.mobile} {
                height: 40px;
                padding: 0 16px;
                font-weight: 700;
              }
            }
          }
        }
      }
    }

    main {
      .post-content {
        padding: 0 16px;
        p {
          overflow: hidden;
          width: 100%;
          margin-bottom: 20px;
          color: rgb(47, 52, 56);
          text-overflow: ellipsis;
          overflow-wrap: break-word;
          white-space: pre-line;
        }
        img {
          display: block;
          max-width: 100%;
          width: 100%;
          margin: 20px 0px;
        }
      }

      .tag {
        padding: 0 16px;
        margin: 40px 0px 14px;

        .tag-container {
          span {
            margin-right: 10px;
            margin-bottom: 2px;
            padding: 0px;
            border: 0px;
            font-size: 14px;
            line-height: 20px;
            color: rgb(0, 184, 240);
            vertical-align: middle;
            background: none;
            ${({ theme }) => theme.minMedia.mobile} {
              font-size: 16px;
              line-height: 24px;
              margin-right: 16px;
              margin-bottom: 8px;
            }
          }
        }
      }

      .view-count {
        padding: 0 16px;
        margin: 12px 0px;
        font-size: 12px;
        line-height: 20px;
        color: rgb(101, 110, 117);
        b {
          margin-left: 1px;
        }
        ${({ theme }) => theme.minMedia.mobile} {
          font-size: 14px;
        }
      }

      .comment {
        padding: 0 16px;
        padding-top: 24px;
        .comment-count {
          h1 {
            margin: 0px 0px 16px;
            font-size: 18px;
            line-height: 24px;
            font-weight: 700;
            span {
              display: inline-block;
              padding-left: 2px;
              color: rgb(53, 197, 240);
            }
          }
        }

        .comment-input-container {
          display: flex;
          align-items: center;
          .profile-img {
            width: 30px;
            height: 30px;
            margin-top: 7px;
            margin-right: 12px;
          }
          .comment-input {
            position: relative;
            flex: 1 0 0%;
            > input {
              word-break: break-word;
              align-items: center;
              line-height: 0;
              border: 1px solid #c2c8cc;
              border-radius: 4px;
              display: block;
              cursor: text;
              position: relative;
              width: 100%;
              color: rgb(47, 52, 56);
              outline: none;
              font-size: 16px;
              line-height: 24px;
              flex: 1 0 0%;
              min-height: 44px;
              padding: 0 95px 0 10px;
              box-sizing: border-box;
              resize: none;
              vertical-align: top;
              overflow: hidden;
              height: 44px;
              min-width: 100px;
              &:focus {
                border: 1px solid rgb(53, 197, 240);
              }
            }
            .submit-button {
              position: absolute;
              display: flex;
              align-items: center;
              right: 0;
              top: 15%;
              right: 20px;
              > svg {
                margin-right: 9px;
              }
            }
          }
        }
        .comment-container {
          margin: 40px 0;

          .comment-item {
            display: flex;
            margin-top: 24px;
            .left {
              margin-right: 12px;
              .profile-img {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-repeat: no-repeat !important;
                background-position: center !important;
                background-size: cover !important;
              }
            }
            .right {
              > h3 {
                font-size: 17px;
              }
              > p {
                width: 100%;
                font-size: 16px;
                color: rgb(47, 52, 56);
                margin: 4px 0px;
              }
              .comment-info-created {
                i {
                  display: inline-block;
                  margin: 0px 4px;
                  font-size: 12px;
                  line-height: 20px;
                  font-weight: 500;
                  font-style: normal;
                  color: rgb(194, 200, 204);
                  &::before {
                    content: "·";
                  }
                }
                > span:nth-child(1) {
                  display: inline-flex;
                  -webkit-box-align: center;
                  align-items: center;
                  padding: 0px;
                  font-size: 12px;
                  line-height: 20px;
                  font-weight: 500;
                  font-family: inherit;
                  color: rgb(130, 140, 148);
                  border: 0px;
                  background: none;
                }
                > span:nth-child(3) {
                  display: inline-flex;
                  -webkit-box-align: center;
                  align-items: center;
                  padding: 0px;
                  font-size: 12px;
                  line-height: 20px;
                  font-weight: 500;
                  font-family: inherit;
                  color: rgb(130, 140, 148);
                  border: 0px;
                  background: none;
                }
                > span:nth-child(5) {
                  display: inline-flex;
                  -webkit-box-align: center;
                  align-items: center;
                  padding: 0px;
                  font-size: 12px;
                  line-height: 20px;
                  font-weight: 500;
                  font-family: inherit;
                  color: rgb(130, 140, 148);
                  border: 0px;
                  background: none;
                }
                > span:nth-child(7) {
                  display: inline-flex;
                  -webkit-box-align: center;
                  align-items: center;
                  padding: 0px;
                  font-size: 12px;
                  line-height: 20px;
                  font-weight: 500;
                  font-family: inherit;
                  color: rgb(130, 140, 148);
                  border: 0px;
                  background: none;
                }
              }
            }
          }
        }
      }
    }
  }
  .second-hr {
    ${({ theme }) => theme.minMedia.mobile} {
      display: none;
    }
  }

  .other-post {
    padding: 0 16px;
    margin: 23px 0px 76px;
    ${({ theme }) => theme.minMedia.mobile} {
      width: 720px;
      margin: 100px auto 0;
    }
    > h1 {
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
    }

    .other-post-container {
      .other-post-item {
        display: flex;
        justify-content: space-between;
        position: relative;
        margin: 22px 0px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(234, 237, 239);
        padding-bottom: 24px;
        ${({ theme }) => theme.minMedia.mobile} {
          margin: 30px 0px;
          padding: 0px 16px 32px 16px;
        }
        .left {
          font-size: 12px;
          > h1 {
            margin: 0px 0px 4px;
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            color: rgb(47, 52, 56);
            transition: color 0.1s ease 0s;
            ${({ theme }) => theme.minMedia.mobile} {
              margin: 0px 0px 10px;
              font-size: 18px;
              line-height: 24px;
            }
          }
          .other-post-description {
            display: none;
            font-size: 14px;
            line-height: 20px;
            color: rgb(47, 52, 56);
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0px 0px 6px;
            ${({ theme }) => theme.minMedia.mobile} {
              display: block;
            }
          }
          .user-info-created-container {
            margin-top: 14px;
            ${({ theme }) => theme.minMedia.mobile} {
              display: flex;
            }
            .user-info {
              display: flex;
              justify-content: left;
              align-items: center;
              .profile-img {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-repeat: no-repeat !important;
                background-position: center !important;
                background-size: cover !important;
                margin-right: 4px;
              }
              > span {
                display: inline-block;
                margin: 0px 10px 5px 0px;
                color: rgb(47, 52, 56);
                font-weight: bold;
                white-space: nowrap;
              }
            }

            .created {
              display: flex;
              b {
                padding-left: 4px;
                font-weight: 400;
              }
              span {
                display: inline-block;
                margin-right: 8px;
                .view-count {
                  font-weight: bold;
                  color: rgb(53, 197, 240);
                }
                &::after {
                  content: "·";
                  margin-left: 8px;
                }
                &:nth-child(3) {
                  &::after {
                    content: "";
                  }
                }
              }
            }
          }

          .hashtag-container {
            display: block;
            margin: 28px -3px -6px;
            clear: both;
            .hashtag-item {
              display: inline-block;
              background: none rgb(255, 255, 255);
              font-style: inherit;
              font-variant: inherit;
              font-weight: inherit;
              font-stretch: inherit;
              font-family: inherit;
              margin: 0px 3px 6px;
              padding: 1px 11px;
              font-size: 12px;
              line-height: 20px;
              color: rgb(47, 52, 56);
              border: 1px solid rgb(234, 237, 239);
              border-radius: 50px;
              transition: opacity 0.1s ease 0s;
              &::before {
                content: "#";
                color: rgb(194, 200, 204);
                margin-right: 3px;
              }
            }
          }
        }
        .right {
          .post-img {
            float: right;
            margin: 0px 0px 0px 10px;
            width: 92px;
            height: 92px;
            background-repeat: no-repeat !important;
            background-position: center !important;
            background-size: cover !important;
            border-radius: 8px;
            overflow: hidden;
          }
        }
      }
    }
  }
`
