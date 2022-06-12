import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ChatRoomList from "src/components/chat/ChatRoomInfoList"
import chatData from "src/components/chat/data/chatDummy"
import ChatType from "src/types/chatType"
import ChatRoom from "src/components/chat/ChatRoom"

// chat erd가 아직 확실하지 않은 것 같아서 UI에 보이는 것들만 기본값으로 설정

export default function Chat() {
  const [chatList, setChatList] = useState<ChatType[]>([])
  const [currentActivedChat, setCurrentActivedChat] = useState<number | null>(null)

  const onClickChatRoomList = (id: number) => {
    setCurrentActivedChat(id)
  }

  const onSubmitChatInputForm = (text: string) => {
    const submittedChatRoom = chatList.map((item) => {
      if (currentActivedChat === item.id) {
        const chatId = item.content[item.content.length - 1].chatId + 1
        const time = new Date().toString()
        item.content.push({ text, chatId, time })
      }
      return { ...item }
    })
    setChatList(submittedChatRoom)
  }

  const onClickExitIcon = () => {
    if (currentActivedChat !== null) {
      const filterChatList = chatList.filter((chat) => chat.id !== currentActivedChat)
      setCurrentActivedChat(null)
      setChatList(filterChatList)
    }
    if (currentActivedChat === null) {
      alert("대화내용이 존재하지 않습니다.")
    }
  }

  useEffect(() => {
    setChatList(chatData)
  }, [])

  return (
    <StyledMainContainer>
      <StyledMainWrapper>
        <StyledChatRoomContainer>
          <p className="chatRoomTitle">채팅방</p>
          <StyleChatRoomInfoListWrapper>
            {chatList.map((chat) => (
              <ChatRoomList
                chat={chat}
                key={chat.id}
                active={chat.id === currentActivedChat}
                onClickChatRoomList={onClickChatRoomList}
              />
            ))}
          </StyleChatRoomInfoListWrapper>
        </StyledChatRoomContainer>
        <ChatRoom
          chat={currentActivedChat !== null ? chatList[currentActivedChat] : null}
          onSubmitChatInputForm={onSubmitChatInputForm}
          onClickExitIcon={onClickExitIcon}
        />
      </StyledMainWrapper>
    </StyledMainContainer>
  )
}

const StyleChatRoomInfoListWrapper = styled.ul`
  padding: 0 0.5rem;
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
