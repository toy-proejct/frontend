import dayjs from "dayjs"

type SorItemType = {
  createdAt: string
  likedAt: number
  cost?: number
}

const sortArrItems = <T extends SorItemType>(targetText: string, arr: T[]): T[] => {
  if (targetText === "최신순") {
    const sortedItem = arr.sort((a, b) => {
      const firstCreateAt = dayjs(a.createdAt)
      const secondCreateAt = dayjs(b.createdAt)
      return firstCreateAt > secondCreateAt ? -1 : firstCreateAt < secondCreateAt ? 1 : 0
    })
    return sortedItem
  }
  if (targetText === "인기순") {
    const sortedItem = arr.sort((a, b) => b.likedAt - a.likedAt)
    return sortedItem
  }
  if (targetText === "저가순") {
    const sortedItem = arr.sort((a, b) => {
      if (a.cost && b.cost) {
        return a.cost - b.cost
      }
      const firstCreateAt = dayjs(a.createdAt)
      const secondCreateAt = dayjs(b.createdAt)
      return firstCreateAt > secondCreateAt ? -1 : firstCreateAt < secondCreateAt ? 1 : 0
    })
    return sortedItem
  }
  if (targetText === "고가순") {
    const sortedItem = arr.sort((a, b) => {
      if (a.cost && b.cost) {
        return b.cost - a.cost
      }
      const firstCreateAt = dayjs(a.createdAt)
      const secondCreateAt = dayjs(b.createdAt)
      return firstCreateAt > secondCreateAt ? -1 : firstCreateAt < secondCreateAt ? 1 : 0
    })
    return sortedItem
  }
  return arr
}

export default sortArrItems
