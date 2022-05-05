import styled from "styled-components";
import React, { useState } from "react";

const QuestionListContainer = styled.div`
    padding: 20px 0;
    .question {
        max-width: 780px;
        padding: 0 15px;
        margin: 0 auto;

        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0 10px;

            .question-filter {
                select {
                    width: 100%;
                    padding: 0.6em 2em 0.6em 0.8em;
                    font-size: 16px;
                    font-family: inherit;
                    background: url(https://ifh.cc/g/YLHz0C.jpg)
                        no-repeat 85% 50%;
                    border: 1px solid #c4c4c4;
                    border-radius: 8px;
                    outline: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
            }

            .question-submit {
                button {
                    display: inline-block;
                    font-size: 14px;
                    height: 40px;
                    border-radius: 4px;
                    padding: 0 16px;
                    font-weight: 400;
                    text-align: center;
                    color: #FFFFFF;
                    background-color: #35C5F0;
                    width: 120px;
                    font-weight: bold;
                }
            }
        }

        &-list {
            .notice-post {
                display: flex;
                align-items: center;
                display: -webkit-flex;
                padding: 18px 0;
                font-weight: bold;
                font-size: 16px;
                line-height: 20px;
                color: #2F3438;
                -webkit-transition: .1s opacity;
                transition: .1s opacity;

                span {
                    font-size: 12px;
                    line-height: 20px;
                    padding: 0 8px;
                    border-radius: 12px;
                    color: #35C5F0;
                    background-color: #EFFBFF;
                    display: inline-block;
                    font-weight: 700;
                    height: 24px;
                    line-height: 24px;
                    -webkit-flex: 0 0 auto;
                    flex: 0 0 auto;
                    margin: 1px 10px 0 0;
                }

                &:hover {
                    opacity: 0.6;
                }


            }

            hr {
                margin: 0;
                padding: 0;
                height: 1px;
                border: none;
                background-color: #EAEDEF;
            }

            .question-item {
                display: flex;
                align-items: center;
                
                margin: 30px 0;
                padding: 0 16px;
                .left {
                    width: 85%;
                    .title {
                        margin: 0 0 10px;
                        font-size: 18px;
                        line-height: 24px;
                        font-weight: bold;
                        color: #2F3438;
                        -webkit-transition: .1s color;
                        transition: .1s color;
                        &:hover {
                            color: #828C94;
                        }
                    }
                    .content {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        margin: 0 0 16px;
                        font-size: 14px;
                        line-height: 20px;
                        height: 40px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: #2F3438;
                        -webkit-transition: .1s color;
                        transition: .1s color;
                        &:hover {
                            color: #828C94;
                        }
                    }
                    .profile {
                        display: flex;
                        align-items: center;
                        margin: 16px 8px 10px 0;
                        font-size: 12px;
                        &-img {
                            display: flex;
                            align-items: center;
                            margin: 0 10px 0px 0;
                            color: #2F3438;
                            font-weight: bold;
                            white-space: nowrap;
                            img {
                                width: 18px;
                                height: 18px;
                                margin-right: 4px;
                                border-radius: 100%;
                                vertical-align: -5px;
                                background-color: #F7F9FA;
                                overflow: hidden;
                            }
                        }
                        .question-info {
                            color:#828C94;
                            &-created {
                                display: inline-block;
                                margin-right: 8px;
                                &::after {
                                    content: '·';
                                    margin-left: 8px;
                                }
                            }
                            &-comment {
                                display: inline-block;
                                margin-right: 8px;
                                &::after {
                                    content: '·';
                                    margin-left: 8px;
                                }
                                b {
                                    font-weight: bold;
                                    color: #35C5F0;
                                }
                            }
                        }
                    }

                    .hashtag-list {
                        .hashtag-item {
                            padding: 4px 11px;
                            display: inline-block;
                            margin: 0 3px 6px;
                            font-size: 12px;
                            line-height: 20px;
                            color: #2F3438;
                            background-color: #FFFFFF;
                            border: 1px solid #EAEDEF;
                            border-radius: 50px;
                            -webkit-transition: .1s opacity;
                            transition: .1s opacity;

                            &:hover {
                                opacity: 0.6;
                            }
                        }
                    }
                }

                .right {
                    width: 15%;
                    margin: 0 0 0 10px;
                    img {
                        width: 100%;
                        height: 110px;
                        border-radius: 8px;
                    }
                }
            }
        }
    }
`;

const QuestionList: React.FC = () => {
    const [quetionList,setQuestionList] = useState([{
        title:'이렇게 생긴 가림막이 있나요??',
        content: '신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요',
        profile_img : 'https://ifh.cc/g/y8DZkS.jpg',
        writer: '이성운72',
        created: '21분전',
        comment_count: 6,
        view_count: 10,
        hashtags: ['디자인추천','소파','식탁','20평대','거실'],
        img_url: 'https://ifh.cc/g/y8DZkS.jpg'
    },
    {
        title:'이렇게 생긴 가림막이 있나요??',
        content: '신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요',
        writer: '이성운72',
        created: '21분전',
        comment_count: 6,
        view_count: 10,
        hashtags: ['디자인추천','소파','식탁','20평대','거실'],
        img_url: 'https://ifh.cc/g/y8DZkS.jpg'
    },
    {
        title:'이렇게 생긴 가림막이 있나요??',
        content: '신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요',
        writer: '이성운72',
        created: '21분전',
        comment_count: 6,
        view_count: 10,
        hashtags: ['디자인추천','소파','식탁','20평대','거실'],
        img_url: 'https://ifh.cc/g/y8DZkS.jpg'
    },{
        title:'이렇게 생긴 가림막이 있나요??',
        content: '신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요',
        writer: '이성운72',
        created: '21분전',
        comment_count: 6,
        view_count: 10,
        hashtags: ['디자인추천','소파','식탁','20평대','거실'],
        img_url: 'https://ifh.cc/g/y8DZkS.jpg'
    },
    {
        title:'이렇게 생긴 가림막이 있나요??',
        content: '신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요',
        writer: '이성운72',
        created: '21분전',
        comment_count: 6,
        view_count: 10,
        hashtags: ['디자인추천','소파','식탁','20평대','거실'],
        img_url: 'https://ifh.cc/g/y8DZkS.jpg'
    },
    {
        title:'이렇게 생긴 가림막이 있나요??',
        content: '신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요',
        writer: '이성운72',
        created: '21분전',
        comment_count: 6,
        view_count: 10,
        hashtags: ['디자인추천','소파','식탁','20평대','거실'],
        img_url: 'https://ifh.cc/g/y8DZkS.jpg'
    },
    {
        title:'이렇게 생긴 가림막이 있나요??',
        content: '신규입주하는데요 거실에 어떤쇼파가 어울릴까 고민중이거든요부엌에 식탁이랑요 거실에는 원목탁자에 티비올려놓을거고 하얀색 하늘하늘한 커튼이구요식탁은 부엌 바로앞에 전등쪽에 놓을거구요위의 부엌과 거실은 이어져있어요질문은 처음이라 이렇게하는게 맞나 모르겠지만 추천부탁드려요',
        writer: '이성운72',
        created: '21분전',
        comment_count: 6,
        view_count: 10,
        hashtags: ['디자인추천','소파','식탁','20평대','거실'],
        img_url: 'https://ifh.cc/g/y8DZkS.jpg'
    },])
  return (
    <QuestionListContainer>
        <div className="question">
            <div className="question-header">
                <div className="question-filter">
                    <select>
                        <option value='인기순'>인기순</option>
                        <option value='최신순' selected>최신순</option>
                        <option value='최근 답변순'>최근 답변순</option>
                    </select>
                </div>
                <div className="question-submit">
                    <button>질문하기</button>
                </div>
            </div>
            <div className="question-list">
                <div className="notice-post">
                    <span>공지</span>
                    <p>답변 이벤트 안내 및 활동 주의사항 📢</p>
                </div>
                <hr/>
                <div className="notice-post">
                    <span>공지</span>
                    <p>빠르고 정확한 인테리어 답변을 받는 방법은?</p>
                </div>
                <hr/>
                <div className="notice-post">
                    <span>공지</span>
                    <p>다시 돌아온 5월 멘토 모집 🙋🏻‍♂️📝</p>
                </div>
                <hr/>
                {quetionList.map(item => (
                    <>
                    <div className="question-item">
                        <div className="left">
                            <h1 className="title">{item.title}</h1>
                            <p className="content">{item.content}</p>
                            <div className="profile">
                                <div className="profile-img">
                                    <img src={item.img_url} alt='프로필 사진'/>
                                    <span>{item.writer}</span>
                                </div>
                                <div className="question-info">
                                    <span className="question-info-created">{item.created}</span>
                                    <span className="question-info-comment">댓글 <b>{item.comment_count}</b></span>
                                    <span className="question-info-views">조회 {item.view_count}</span>
                                </div>
                            </div>
                            <div className="hashtag-list">
                                {item.hashtags.map(item => (
                                    <span className="hashtag-item">#{item}</span>
                                ))}
                            </div>
                        </div>
                        <div className="right">
                            <img src={item.img_url} alt='질문사진'/>
                        </div>
                    </div>
                    <hr></hr>
                    </>
                ))}
            </div>
        </div>
    </QuestionListContainer>
  );
};

export default QuestionList;
