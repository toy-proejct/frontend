import React, { useState } from "react"
import styled from "styled-components"

import profile from "/public/statics/chat/profileExample.png"
import Image from "next/image"

type ChatRoomList = {
  chatRoom: {
    id: number
    active: boolean
    title: string
    lastChat: string
    lastChatTime: string
    notReadCount: number
  }
  onClickChatRoomList: (id: number) => void
}

export default function ChatRoomList({ chatRoom, onClickChatRoomList }: ChatRoomList) {
  const [isOpendMoreInfo, setIsOpendMoreInfo] = useState(false)
  const { active, title, lastChat, lastChatTime, notReadCount, id } = chatRoom
  const handleMoreInfo = (event: React.MouseEvent) => {
    if (event.type === "mouseleave") {
      setIsOpendMoreInfo(false)
      return
    }
    setIsOpendMoreInfo(!isOpendMoreInfo)
  }
  const clickChatRoomList = () => {
    if (!active) {
      onClickChatRoomList(id)
    }
  }
  return (
    <StyledChatRoomList active={active} onClick={clickChatRoomList}>
      <StyledChatRoomImgWrapper>
        <Image src={profile} alt="profile" objectFit="fill" layout="fill" />
      </StyledChatRoomImgWrapper>
      <StyledChatRoomInfoWrapper>
        <p className="chatRoomInfoTitle">{title}</p>
        <span className="chatRoomLastChat">{lastChat}</span>
        <span className="chatRoomLastChatTime">{lastChatTime}</span>
      </StyledChatRoomInfoWrapper>
      <StyledChatRoomMoreDiv onClick={handleMoreInfo} onMouseLeave={handleMoreInfo}>
        <p>…</p>
        <StyledChatRoomMoreInfo isOpendMoreInfo={isOpendMoreInfo}>
          <li>채팅방나가기</li>
          <li>신고</li>
          <li>프로필 보기</li>
          <li>대화방 알림 끄기</li>
        </StyledChatRoomMoreInfo>
      </StyledChatRoomMoreDiv>
      <StyledChatRoomNotReadingText>
        {notReadCount === 0 ? "✔" : notReadCount}
      </StyledChatRoomNotReadingText>
    </StyledChatRoomList>
  )
}

const StyledChatRoomList = styled.li<{ active?: boolean }>`
  background: ${(props) => (props.active ? "rgb(234,243,255)" : "white")};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.7rem;
  border: 1px solid #ededed;
  height: 66px;
  line-height: 1;
  position: relative;
  margin-bottom: 0.5rem;
  border-radius: 6px;
`

const StyledChatRoomMoreInfo = styled.ul<{ isOpendMoreInfo: boolean }>`
  display: ${({ isOpendMoreInfo }) => (isOpendMoreInfo ? "block" : "none")};
  z-index: 1;
  font-size: 0.8rem;
  position: absolute;
  width: 180px;
  height: 168px;
  left: -50px;
  top: 50px;
  background: white;
  box-shadow: 2px 5px 12px 0px #b5b5b5;
  padding: 0.5rem;
  border-radius: 7px;
  &:before {
    content: "";
    left: 56px;
    position: absolute;
    top: -34px;
    border-left: 10px solid transparent;
    border-top: 20px solid transparent;
    border-bottom: 20px solid white;
    border-right: 10px solid transparent;
  }
  li {
    padding: 1.2rem 0;
    border: none;
    line-height: 0;
    &: hover {
      background: #e3e3e3;
    }
  }
`
const StyledChatRoomImgWrapper = styled.div`
  width: 10%;
  height: 50px;
  border-radius: 50%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`

const StyledChatRoomInfoWrapper = styled.div`
  padding-left: 0.7rem;
  width: 55%;
  .chatRoomInfoTitle {
    padding-bottom: 0.1rem;
    color: #424242;
    font-size: 0.9rem;
    ${StyledChatRoomList}:hover & {
      text-decoration: underline;
    }
  }
  .chatRoomLastChat {
    font-size: 0.7rem;
    color: grey;
  }
  .chatRoomLastChatTime {
    font-size: 0.8rem;
    color: grey;
    padding-left: 0.3rem;
  }
`

const StyledChatRoomNotReadingText = styled.div`
  position: absolute;
  right: 25px;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 34px;
  color: white;
  border-radius: 50%;
  background: rgb(53, 197, 240);
`

const StyledChatRoomMoreDiv = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  background: white;
  margin-left: 33px;
  text-align: center;
  line-height: 34px;
  display: none;
  ${StyledChatRoomList}:hover & {
    display: block;
  }
  border: 1px solid #ededed;
  &:hover {
    background: #e3e3e3;
  }
`
