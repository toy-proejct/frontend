import React from "react"
import styled from "styled-components"
import { ProductType } from "src/types/productType"
import Link from "next/link"
import Image from "next/image"
import dayjs from "dayjs"
import { Flex } from "../shared/Flex"

type ProductListType = {
  product: ProductType
}

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

export default function ProductList({ product }: ProductListType) {
  const { title, cost, image, likedAt } = product
  const createdAt = handleCreateAt(product.createdAt)
  return (
    <ProductListContainer>
      <Link href={`/products/${product.boardId}`} passHref>
        <StyledLink>
          <ProductListImg>
            <Image src={image} layout="fill" objectFit="fill" alt={title} />
          </ProductListImg>
          <div>
            <ProductListTitle>{title}</ProductListTitle>
            <ProductListCost>{cost.toLocaleString()}원</ProductListCost>
            <Flex axis="horizontal" space="evenly">
              <ProductListCreatedAt>{createdAt}</ProductListCreatedAt>
              <ProductListHeart>💖 {likedAt}</ProductListHeart>
            </Flex>
          </div>
        </StyledLink>
      </Link>
    </ProductListContainer>
  )
}

const ProductListContainer = styled.li`
  list-style: none;
`

const StyledLink = styled.a`
  color: #343434;
  cursor: pointer;
`
const ProductListImg = styled.div`
  background: grey;
  width: 100%;
  height: 150px;
  border-radius: 4px;
  position: relative;
  img {
    transform: scale(1);
    transition: 0.3s;
    ${StyledLink}:hover & {
      transform: scale(1.05);
    }
  }
`

const ProductListTitle = styled.p`
  font-size: 1rem;
  padding-top: 0.3rem;
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${StyledLink}:hover & {
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: #343434;
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    font-size: 0.9rem;
  }
`

const ProductListCost = styled.div`
  font-size: 0.9rem;
  ${({ theme }) => theme.maxMedia.mobile} {
    font-size: 0.8rem;
  }
`

const ProductListCreatedAt = styled.p`
  color: #9c9c9c;
  padding-top: 0.1rem;
  ${({ theme }) => theme.maxMedia.mobile} {
    font-size: 0.8rem;
  }
`

const ProductListHeart = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 0.7rem;
  ${({ theme }) => theme.maxMedia.mobile} {
    font-size: 0.6rem;
  }
`
