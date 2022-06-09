import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import ChatRoomList from "src/components/chat/ChatRoomList"
import exitIcon from "public/statics/chat/exitIcon.png"
import userInfoIcon from "public/statics/chat/userInfoIcon.png"
import imageIcon from "public/statics/chat/imageIcon.png"
import ChatContainer from "src/components/chat/ChatContainer"
import chatData from "src/components/chat/data/chatDummy"
import chatType from "src/types/chatType"

// chat erd가 아직 확실하지 않은 것 같아서 UI에 보이는 것들만 기본값으로 설정

type chatActiveType = {
  active: boolean
  chatRoomId: number
}

export default function Chat() {
  const [chatList, setChatList] = useState<chatType[] | null>(null)
  const [chatActiveList, setChatActiveList] = useState<chatActiveType[] | null>(null)
  const inputTextRef = useRef<HTMLInputElement>(null)

  const onClickChatRoomList = (id: number) => {
    const changedChatActiveList = chatActiveList!.map((item) => {
      if (id === item.chatRoomId) {
        return { ...item, active: true }
      }
      if (item.active) {
        return { ...item, active: false }
      }
      return item
    })
    setChatActiveList(changedChatActiveList)
  }

  const onSubmitChatInputForm = (event: React.FormEvent) => {
    event.preventDefault()
    const isExistedOnlySpace = /^\s*$/.test(inputTextRef.current!.value)
    if (inputTextRef.current && !isExistedOnlySpace) {
      const submittedChatRoom = chatList!.map((item, idx) => {
        if (chatActiveList && chatActiveList[idx].active) {
          const chatId = item.content[item.content.length - 1].chatId + 1
          const text = inputTextRef.current!.value
          const time = new Date().toString()
          item.content.push({ text, chatId, time })
        }
        return { ...item }
      })
      inputTextRef.current.value = ""
      setChatList(submittedChatRoom)
    }
    return
  }

  const onClickExitIcon = () => {
    if (chatActiveList && confirm("채팅방을 나가면 대화내용이 삭제됩니다.")) {
      let currentActiveChat: number | null = null
      chatActiveList.map((item) => {
        if (item.active) {
          currentActiveChat = item.chatRoomId
        }
      })
      if (currentActiveChat !== null) {
        const filterChatList = chatList!.filter((chat) => chat.id !== currentActiveChat)
        const filterActiveChat = chatActiveList.filter(
          (activeList) => activeList.chatRoomId !== currentActiveChat,
        )
        setChatActiveList(filterActiveChat)
        setChatList(filterChatList)
      }
      if (currentActiveChat === null) {
        alert("대화내용이 존재하지 않습니다.")
      }
    }
  }

  useEffect(() => {
    const firstChatActiveList: chatActiveType[] = []
    chatData.forEach((chat) => {
      firstChatActiveList.push({ chatRoomId: chat.id, active: false })
    })
    setChatList(chatData)
    setChatActiveList(firstChatActiveList)
  }, [])

  return (
    <StyledMainContainer>
      <StyledMainWrapper>
        <StyledChatRoomContainer>
          <p className="chatRoomTitle">채팅방</p>
          <StyleChatRoomListWrapper>
            {chatList &&
              chatActiveList &&
              chatList.map((chat, idx) => (
                <ChatRoomList
                  chat={chat}
                  key={chat.id}
                  active={chatActiveList[idx].active}
                  onClickChatRoomList={onClickChatRoomList}
                />
              ))}
          </StyleChatRoomListWrapper>
        </StyledChatRoomContainer>
        <StyledChatWritePlaceContainer>
          <StyledChatWriteTitleContainer>
            <p className="chatWritePlaceTitle">상대방 아이디</p>
            <div className="chatWritePlaceBtnWrapper">
              <button>
                <Image src={userInfoIcon} width={22} height={22} />
              </button>
              <button onClick={onClickExitIcon}>
                <Image src={exitIcon} width={22} height={22} />
              </button>
            </div>
          </StyledChatWriteTitleContainer>
          <StyledChatOutputContainer>
            {chatList &&
              chatActiveList &&
              chatList.map((chat, idx) => {
                if (chatActiveList[idx].active) {
                  return <ChatContainer key={chat.id} chat={chat} />
                }
              })}
          </StyledChatOutputContainer>
          <StyledChatInputForm onSubmit={onSubmitChatInputForm}>
            <label htmlFor="imageInput">
              <Image src={imageIcon} width={27} height={27} />
            </label>
            <input type="file" id="imageInput" accept="image/*" />
            <input type="text" placeholder="채팅을 입력하세요." ref={inputTextRef} />
            <button className="chatWriteBtn">입력</button>
          </StyledChatInputForm>
        </StyledChatWritePlaceContainer>
      </StyledMainWrapper>
    </StyledMainContainer>
  )
}

const StyledChatOutputContainer = styled.section`
  padding: 1rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  align-items: flex-start;
  overflow-y: scroll;
`

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
    ${({ theme }) => theme.maxMedia.tablet} {
      padding: 0.7rem 0.5rem;
      border-radius: 13px;
    }
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
  ${({ theme }) => theme.maxMedia.tablet} {
    width: 50%;
  }
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
  ${({ theme }) => theme.maxMedia.tablet} {
    width: 50%;
  }
`

const StyledMainContainer = styled.main`
  background: rgb(249, 249, 249);
  overflow-x: hidden;
`

const StyledMainWrapper = styled.div`
  background: rgb(244, 244, 250);
  width: ${({ theme }) => theme.size.xLarge};
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  height: 600px;
  ${({ theme }) => theme.maxMedia.notebook} {
    max-width: ${({ theme }) => theme.size.large};
  }
  ${({ theme }) => theme.maxMedia.tablet} {
    width: 100%;
    justify-content: center;
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    width: ${({ theme }) => theme.size.middle};
  }
`
