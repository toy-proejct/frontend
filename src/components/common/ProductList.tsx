import React from "react"
import styled from "styled-components"
import { ProductType } from "../../types/productType"
import Link from "next/link"
import Image from "next/image"
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

export default function ProductList({ product }: ProductType) {
  const { title, cost, image, likedAt } = product
  const createdAt = handleCreateAt(product.createdAt)
  return (
    <StyledListWrapper>
      <Link href="#">
        <StyledListLink>
          <StyledImageWrapper>
            <Image src={image} layout="fill" objectFit="fill" style={{ borderRadius: 4 }} />
          </StyledImageWrapper>
          <div>
            <StyledListTitle>{title}</StyledListTitle>
            <StyledProductDetailWrapper>
              <StyledProductCostWrapper>
                <p>{cost.toLocaleString()}원</p>
                <StyledCreatedAt>{createdAt}</StyledCreatedAt>
              </StyledProductCostWrapper>
              <StyledProductHeartWrapper>
                <p>💖 {likedAt}</p>
              </StyledProductHeartWrapper>
            </StyledProductDetailWrapper>
          </div>
        </StyledListLink>
      </Link>
    </StyledListWrapper>
  )
}

const StyledListLink = styled.a`
  color: #343434;
  cursor: pointer;
`

const StyledImageWrapper = styled.div`
  background: grey;
  width: 100%;
  height: 150px;
  border-radius: 4px;
  position: relative;
  ${StyledListLink}:hover & {
    filter: brightness(0.7);
  }
`

const StyledListTitle = styled.p`
  font-size: 1rem;
  padding-top: 0.3rem;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${StyledListLink}:hover & {
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #343434;
  }
`

const StyledListWrapper = styled.li`
  width: 250px;
  padding: 1rem 0;
`

const StyledProductCostWrapper = styled.div`
  font-size: 0.9rem;
`
const StyledProductHeartWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 0.7rem;
`
const StyledProductDetailWrapper = styled.div`
  display: flex;
  position: relative;
`

const StyledCreatedAt = styled.p`
  color: #9c9c9c;
  padding-top: 0.1rem;
`
