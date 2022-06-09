import dayjs from "dayjs"

const handleCreateAt = (createdAt: string) => {
  dayjs().format()
  const today = dayjs()

  const diffYear = today.diff(createdAt, "year")
  const diffMonth = today.diff(createdAt, "month")
  const diffWeek = today.diff(createdAt, "week")
  const diffDay = today.diff(createdAt, "day")
  const diffHour = today.diff(createdAt, "hour")
  const diffMinute = today.diff(createdAt, "minute")
  const diffSecond = today.diff(createdAt, "second")

  if (diffYear > 0) {
    return `${diffYear}년 전`
  }
  if (diffMonth > 0) {
    return `${diffMonth}달 전`
  }
  if (diffWeek > 0) {
    return `${diffWeek}주 전`
  }
  if (diffDay > 0) {
    return `${diffDay}일 전`
  }
  if (diffHour > 0) {
    return `${diffHour}시간 전`
  }
  if (diffMinute > 0) {
    return `${diffMinute}분 전`
  }
  return `${diffSecond}초 전`
}

export default handleCreateAt
