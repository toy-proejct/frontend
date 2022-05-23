import React from "react"
import styled from "styled-components"
import chatType from "src/types/chatType"

type ChatContainerType = {
  chat: chatType
}

export default function ChatContainer({ chat }: ChatContainerType) {
  const changeDateToHours = (time: string) => {
    const date = new Date(time)
    const hours = date.getHours()
    const minute = date.getMinutes()
    return hours >= 12 ? `오후: ${hours - 12}:${minute}` : `오전: ${hours}:${minute}`
  }
  return (
    <StyledChattingContainer>
      {chat.content.map((message) => (
        <li className="chatWrapper" key={message.chatId}>
          <p className="chatText">{message.text}</p>
          <span className="chatOutputTime">{changeDateToHours(message.time)}</span>
        </li>
      ))}
    </StyledChattingContainer>
  )
}

const StyledChattingContainer = styled.ul`
  padding: 0.5rem;
  max-width: 300px;
  color: black;
  border-radius: 7px;
  .chatWrapper {
    position: relative;
    margin-top: 1rem;
  }
  .chatText {
    position: relative;
    background: white;
    padding: 0.5rem;
    border-radius: 10px;
    white-space: pre-wrap;
  }
  .chatOutputTime {
    font-size: 0.3rem;
    position: absolute;
    right: -50px;
    color: #c7c1be;
    bottom: 0;
  }
`
