// ERD에 대해서 이야기해보고
type Content = {
  chatId: number
  text: string
  time: string
}

type ChatType = {
  id: number
  title: string
  lastChat: string
  content: Content[]
  modifiedAt: string
  createdAt: string
  notReadCount: number
}

export default ChatType
