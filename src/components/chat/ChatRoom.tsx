import React, { useRef } from "react"
import styled from "styled-components"
import Image from "next/image"
import userInfoIcon from "public/statics/chat/userInfoIcon.png"
import exitIcon from "public/statics/chat/exitIcon.png"
import Chatting from "./Chatting"
import imageIcon from "public/statics/chat/imageIcon.png"
import ChatType from "src/types/chatType"

type ChatRoomType = {
  onSubmitChatInputForm: (text: string) => void
  onClickExitIcon: () => void
  chat: ChatType | null
}

export default function ChatRoom({ onSubmitChatInputForm, onClickExitIcon, chat }: ChatRoomType) {
  const inputTextRef = useRef<HTMLInputElement>(null)

  const submitChatInputForm = (event: React.FormEvent) => {
    event.preventDefault()
    const isExistedOnlySpace = /^\s*$/.test(inputTextRef.current!.value)
    if (inputTextRef.current && !isExistedOnlySpace && chat) {
      const text = inputTextRef.current!.value
      onSubmitChatInputForm(text)
      inputTextRef.current.value = ""
    }
  }

  const clickExitIcon = () => {
    if (confirm("채팅방을 나가면 대화내용이 삭제됩니다.")) {
      onClickExitIcon()
    } else {
      return false
    }
  }

  return (
    <StyledChatPlaceContainer>
      <StyledChatTitleContainer>
        <p className="chatWritePlaceTitle">상대방 아이디</p>
        <div className="chatWritePlaceBtnWrapper">
          <button>
            <Image src={userInfoIcon} width={22} height={22} />
          </button>
          <button onClick={clickExitIcon}>
            <Image src={exitIcon} width={22} height={22} />
          </button>
        </div>
      </StyledChatTitleContainer>
      <StyledChatOutputContainer>{chat && <Chatting chat={chat} />}</StyledChatOutputContainer>
      <StyledChatInputForm onSubmit={submitChatInputForm}>
        <label htmlFor="imageInput">
          <Image src={imageIcon} width={27} height={27} />
        </label>
        <input type="file" id="imageInput" accept="image/*" />
        <input type="text" placeholder="채팅을 입력하세요." ref={inputTextRef} />
        <button className="chatWriteBtn">입력</button>
      </StyledChatInputForm>
    </StyledChatPlaceContainer>
  )
}

const StyledChatPlaceContainer = styled.section`
  width: 50%;
  ${({ theme }) => theme.maxMedia.tablet} {
    width: 50%;
  }
  border-left: 1px solid #efefef;
  display: flex;
  flex-direction: column;
`

const StyledChatTitleContainer = styled.div`
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

const StyledChatOutputContainer = styled.section`
  padding: 1rem;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  align-items: flex-start;
  overflow-y: scroll;
`
