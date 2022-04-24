import React from "react"
import styled from "styled-components"
import { ProductType } from "../..//src/types/productType"
import Link from "next/link"
import Image from "next/image"
import productExample from "../../public/statics/productExample.jpg"

// 그럼 4.1일이랑 3.31이랑 비교하면 1달로 나옴
const handleCreateAt = (createdAt: string) => {
  const today = new Date()
  const createdDay = new Date(createdAt)

  const yearToday = today.getFullYear()
  const yearCreatedDay = createdDay.getFullYear()
  const notSameYear = yearToday > yearCreatedDay

  const monthToday = today.getMonth()
  const monthCreatedDay = createdDay.getMonth()
  const notSameMonth = monthToday > monthCreatedDay

  const dateToday = today.getDate()
  const dateCreatedDay = createdDay.getDate()
  const notSameDay = dateToday > dateCreatedDay

  const hourToday = today.getHours()
  const hourCreatedDay = createdDay.getHours()
  const notSameHour = hourToday > hourCreatedDay

  const minuteToday = today.getMinutes()
  const minuteCreatedDay = createdDay.getMinutes()

  if (notSameYear) {
    return `${yearToday - yearCreatedDay}년 전`
  }

  if (notSameMonth) {
    return `${monthToday - monthCreatedDay}달 전`
  }

  if (notSameDay) {
    return `${dateToday - dateCreatedDay}일 전`
  }

  if (notSameHour) {
    return `${hourToday - hourCreatedDay}시간 전`
  }

  return `${minuteToday - minuteCreatedDay}분 전`
}

export default function ProductList({ product }: ProductType) {
  const { title, cost, image } = product
  const createdAt = handleCreateAt(product.createdAt)
  return (
    <StyledListWrapper>
      <Link href="#">
        <StyledListLink>
          <StyledImageWrapper>
            <Image src={productExample} width={260} height={150} style={{ borderRadius: 4 }} />
          </StyledImageWrapper>
          <div>
            <StyledListTitle>{title}</StyledListTitle>
            <StyledProductDetailWrapper>
              <StyledProductCostWrapper>
                <p>{cost.toLocaleString()}원</p>
                <StyledCreatedAt>{createdAt}</StyledCreatedAt>
              </StyledProductCostWrapper>
              <StyledProductHeartWrapper>
                <p>찜 15</p>
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
  ${StyledListLink}:hover & {
    filter: brightness(0.7);
  }
`

const StyledListTitle = styled.p`
  font-size: 1.1rem;
  padding: 0.3rem 0;
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
  padding: 0.5rem 0;
`

const StyledProductCostWrapper = styled.div``
const StyledProductHeartWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 0.8rem;
`
const StyledProductDetailWrapper = styled.div`
  display: flex;
  position: relative;
`

const StyledCreatedAt = styled.p`
  font-size: 1rem;
  color: #9c9c9c;
  padding-top: 0.1rem;
`
