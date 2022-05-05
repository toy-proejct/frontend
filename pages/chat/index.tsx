import React, { useState } from "react"
import styled from "styled-components"
import ChatRoomList from "../../src/components/chat/chatRoomList"

export default function Chat() {
  const [chatRoom, setChatRoom] = useState([
    {
      id: 0,
      active: true,
      title: "판매글 제목을 보여줍니다.",
      lastChat: "라스트채팅을 보여줍니다.",
      lastChatTime: "2분 전",
      notReadCount: 0,
    },
    {
      id: 1,
      active: false,
      title: "황홍공방입니다.",
      lastChat: "테스트합니다.",
      lastChatTime: "2일 전",
      notReadCount: 2,
    },
    {
      id: 2,
      active: false,
      title: "청축판매합니다.",
      lastChat: "굿입니다.",
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
  return (
    <StyledMainContainer>
      <StyledMainWrapper>
        <StyledChatRoomContainer>
          <p className="chatRoomTitle">채팅방</p>
          <ChatRoomListWrapper>
            {chatRoom.map((chatRoom) => (
              <ChatRoomList
                chatRoom={chatRoom}
                key={chatRoom.id}
                onClickChatRoomList={onClickChatRoomList}
              />
            ))}
          </ChatRoomListWrapper>
        </StyledChatRoomContainer>
        <div></div>
      </StyledMainWrapper>
    </StyledMainContainer>
  )
}

const ChatRoomListWrapper = styled.ul`
  padding: 0.5rem;
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
  height: 700px;
`
