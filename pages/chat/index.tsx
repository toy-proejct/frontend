import Image from "next/image"
import React, { useState } from "react"
import styled from "styled-components"
import ChatRoomList from "../../src/components/chat/chatRoomList"
import exitIcon from "/public/statics/chat/exitIcon.png"
import userInfoIcon from "/public/statics/chat/userInfoIcon.png"
import imageIcon from "/public/statics/chat/imageIcon.png"

export default function Chat() {
  const [chatRoom, setChatRoom] = useState([
    {
      id: 0,
      active: true,
      title: "판매글 제목을 보여줍니다.",
      lastChat: "라스트채팅을 보여줍니다.",
      lastChatTime: "2분 전",
      content: [
        { text: "반가워요", chatId: 0, time: "20222년05월05일 20:18" },
        { text: "테스트합니다~~~", chatId: 1, time: "20222년05월05일 20:18" },
        {
          text: "테스트합니다@@@@@@@@@@@@@@@@@@@@@@@@",
          chatId: 2,
          time: "20222년05월05일 20:18",
        },
      ],
      notReadCount: 0,
    },
    {
      id: 1,
      active: false,
      title: "황홍공방입니다.",
      lastChat: "테스트합니다.",
      lastChatTime: "2일 전",
      content: [
        { text: "반가워요", chatId: 0, time: "20222년05월05일 20:18" },
        { text: "테스트합니다~~~", chatId: 1, time: "20222년05월05일 20:18" },
        { text: "테스트합니다@@@@@@@@@@@@@@@@@@@@@@@@", chatId: 2, time: "20222년05월05일 20:18" },
      ],
      notReadCount: 2,
    },
    {
      id: 2,
      active: false,
      title: "청축판매합니다.",
      lastChat: "굿입니다.",
      content: [
        { text: "반가워요", chatId: 0, time: "20222년05월05일 20:18" },
        { text: "테스트합니다~~~", chatId: 1, time: "20222년05월05일 20:18" },
        { text: "테스트합니다@@@@@@@@@@@@@@@@@@@@@@@@", chatId: 2, time: "20222년05월05일 20:18" },
      ],
      lastChatTime: "2주 전",
      notReadCount: 5,
    },
  ])

  const onClickChatRoomList = (id: number) => {
    const changedActiveRoomList = chatRoom.map((item) => {
      if (id === item.id) {
        return { ...item, active: true }
      }
      if (item.active) {
        return { ...item, active: false }
      }
      return item
    })
    setChatRoom(changedActiveRoomList)
  }

  const onSubmitChatInputForm = (event: React.FormEvent) => {
    event.preventDefault()
    const submittedChatRoom = chatRoom.map((item) => {
      if (item.active) {
        const chatId = item.content.length ? item.content.length + 1 : 0
        const text = "hello"
        const time = new Date().toString()
        item.content.push({ text, chatId, time })
      }
      return { ...item }
    })
    setChatRoom(submittedChatRoom)
  }
  return (
    <StyledMainContainer>
      <StyledMainWrapper>
        <StyledChatRoomContainer>
          <p className="chatRoomTitle">채팅방</p>
          <StyleChatRoomListWrapper>
            {chatRoom.map((chatRoom) => (
              <ChatRoomList
                chatRoom={chatRoom}
                key={chatRoom.id}
                onClickChatRoomList={onClickChatRoomList}
              />
            ))}
          </StyleChatRoomListWrapper>
        </StyledChatRoomContainer>
        <StyledChatWritePlaceContainer>
          <StyledChatWriteTitleContainer>
            <p className="chatWritePlaceTitle">번개장터</p>
            <div className="chatWritePlaceBtnWrapper">
              <button>
                <Image src={userInfoIcon} width={22} height={22} />
              </button>
              <button>
                <Image src={exitIcon} width={22} height={22} />
              </button>
            </div>
          </StyledChatWriteTitleContainer>
          <StyledChatOutputContainer>
            {chatRoom.map((item) => {
              if (item.active) {
                return <ChatOutputList key={item.id} />
              }
            })}
            <ChatOutputList />
          </StyledChatOutputContainer>
          <StyledChatInputForm onSubmit={onSubmitChatInputForm}>
            <label htmlFor="imageInput">
              <Image src={imageIcon} width={27} height={27} />
            </label>
            <input type="file" id="imageInput" accept="image/*" />
            <input type="text" placeholder="채팅을 입력하세요." />
            <button className="chatWriteBtn">입력</button>
          </StyledChatInputForm>
        </StyledChatWritePlaceContainer>
      </StyledMainWrapper>
    </StyledMainContainer>
  )
}

function ChatOutputList() {
  return (
    <>
      <StyledChatOutputList>
        <p>테스트합니다@@@@@@@@@@@@@@@@@@@@@@@@</p>
        <span className="chatOutputTime">오후 10:32</span>
      </StyledChatOutputList>
    </>
  )
}

const StyledChatOutputContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  align-items: flex-start;
`

const StyledChatOutputList = styled.div`
  background: white;
  position: relative;
  padding: 0.5rem;
  max-width: 300px;
  margin: 0.4rem 0;
  color: black;
  border-radius: 7px;
  background: white;
  .chatOutputTime {
    font-size: 0.3rem;
    position: absolute;
    right: -50px;
    color: #c7c1be;
    bottom: 0;
  }
`
// background: #35c5f0;

const StyledChatInputForm = styled.form`
  background: white;
  padding: 0.5rem 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 80%;
    padding: 0.7rem 0.4rem;
    background: rgb(244, 244, 250);
    border: none;
    outline: none;
    border-radius: 15px;
    font-size: 1.02rem;
  }
  label {
    cursor: pointer;
    img {
      &:hover {
        filter: invert(66%) sepia(57%) saturate(1567%) hue-rotate(160deg) brightness(102%)
          contrast(88%);
      }
    }
  }
  #imageInput {
    display: none;
  }
  .chatWriteBtn {
    padding: 0.7rem 1rem;
    background: #35c5f0;
    color: white;
    font-weight: 600;
    border-radius: 20px;
  }
`

const StyledChatWriteTitleContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  justify-content: center;
  border-bottom: 1px solid #efefef;
  padding: 0.5rem 0;
  position: relative;
  .chatWritePlaceBtnWrapper {
    position: absolute;
    right: 20px;
    display: flex;
    align-items: center;
    button {
      padding: 0 0.3rem;
      display: flex;
      margin-left: 0.5rem;
      img {
        &:hover {
          filter: invert(70%) sepia(23%) saturate(6707%) hue-rotate(167deg) brightness(109%)
            contrast(88%);
        }
      }
    }
  }
`

const StyleChatRoomListWrapper = styled.ul`
  padding: 0 0.5rem;
`

const StyledChatWritePlaceContainer = styled.section`
  width: 50%;
  border-left: 1px solid #efefef;
  display: flex;
  flex-direction: column;
`

const StyledChatRoomContainer = styled.section`
  background: white;
  width: 50%;
  .chatRoomTitle {
    text-align: center;
    padding: 0.5rem 0;
  }
`

const StyledMainContainer = styled.main`
  background: rgb(249, 249, 249);
`

const StyledMainWrapper = styled.div`
  background: rgb(244, 244, 250);
  width: ${({ theme }) => theme.size.xLarge};
  margin: 0 auto;
  display: flex;
  height: 600px;
`
