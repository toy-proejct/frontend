import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ChatRoomInfoList from "src/components/chat/ChatRoomInfoList"
import chatData from "src/components/chat/data/chatDummy"
import ChatType from "src/types/chatType"
import ChatRoom from "src/components/chat/ChatRoom"
import { useRouter } from "next/router"

// chat erd가 아직 확실하지 않은 것 같아서 UI에 보이는 것들만 기본값으로 설정

type CurrentChatProductType = {
  cost: number
  image: string
  pname: string
  userNickname: string
  userId: number
  pid: number
}

export default function Chat() {
  const [chatList, setChatList] = useState<ChatType[]>([])
  const [currentActivedChat, setCurrentActivedChat] = useState<number | null>(null)
  const router = useRouter()
  const [currentChatProduct, setCurrentChatProduct] = useState<CurrentChatProductType | null>(null)

  const onClickChatRoomList = (id: number) => {
    setCurrentActivedChat(id)
  }

  const onSubmitChatInputForm = (text: string) => {
    history.replaceState({}, "", location.pathname)
    const submittedChatRoom = chatList.map((item) => {
      if (currentActivedChat === item.id) {
        const chatId = item.content[item.content.length - 1].chatId + 1
        const time = new Date().toString()
        item.content.push({ text, chatId, time })
      }
      return { ...item }
    })
    setCurrentChatProduct(null)
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

  const handleCurrentChatProduct = () => {
    const { userId, image, pid, pname, userNickname, cost } = router.query
    if (userId && image && pid && pname && userNickname && cost) {
      setCurrentChatProduct({
        pid: Number(pid as string),
        userId: Number(userId as string),
        cost: Number(cost as string),
        pname: pname as string,
        userNickname: userNickname as string,
        image: image as string,
      })
    } //
    else {
      router.push("chat")
    }
  }

  const onClickChatManualBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { pname } = router.query
    const addedChatToChatList = {
      id: chatList.length ? chatList[chatList.length - 1].id + 1 : 0,
      title: pname as string,
      lastChat: event.currentTarget.textContent as string,
      content: [
        { chatId: 0, text: event.currentTarget.textContent as string, time: String(new Date()) },
      ],
      modifiedAt: String(new Date()),
      createdAt: String(new Date()),
      notReadCount: 0,
    }
    setCurrentChatProduct(null)
    setChatList([...chatList, addedChatToChatList])
    setCurrentActivedChat(chatList.length ? chatList[chatList.length - 1].id + 1 : 0)
    history.replaceState({}, "", location.pathname)
  }

  useEffect(() => {
    setChatList(chatData)
  }, [])

  useEffect(() => {
    // 로딩추가
    if (router.isReady) {
      handleCurrentChatProduct()
    }
  }, [router.isReady])

  return (
    <StyledMainContainer>
      <StyledMainWrapper>
        <StyledChatRoomContainer>
          <p className="chatRoomTitle">채팅방</p>
          <StyleChatRoomInfoListWrapper>
            {chatList.map((chat) => (
              <ChatRoomInfoList
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
          currentChatProduct={currentChatProduct}
          onClickChatManualBtn={onClickChatManualBtn}
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
  padding-top: 95px;
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
