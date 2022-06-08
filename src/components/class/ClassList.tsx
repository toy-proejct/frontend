import React from "react"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import ClassListType from "src/types/classListType"

type ClassListPropType = {
  classList: ClassListType
}

export default function ClassList({ classList }: ClassListPropType) {
  const { image, title, teacher, rating, likedAt, view, price } = classList
  const converRatingToStar = Array.from({ length: Math.round(rating) }, () => "⭐")
    .toString()
    .replace(/,/g, "")

  return (
    <StyledClassList>
      <Link href="#">
        <a>
          <StyledImageWrapper>
            <Image src={image} layout="fill" objectFit="scale-down" alt={title} />
          </StyledImageWrapper>
          <StyledTextWrapper>
            <h3>{title}</h3>
            <p className="classInfo classTeacher">{teacher}</p>
            <p className="classInfo">
              {converRatingToStar}({rating}점)
            </p>
            <p className="classInfo">💖 {likedAt}</p>
            <span className="classPrice">{price.toLocaleString()}원</span>
            <span className="classViewCount">{view}명이 등록했습니다.</span>
          </StyledTextWrapper>
        </a>
      </Link>
    </StyledClassList>
  )
}

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 140px;
  background: white;
  position: relative;
`

const StyledClassList = styled.li`
  width: 29%;
  border-radius: 6px;
  margin: 2rem 0;
  &:hover {
    filter: brightness(0.9);
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    width: 48%;
    margin: 1rem 0;
  }
`
const StyledTextWrapper = styled.div`
  padding: 0.7rem;
  padding-left: 0;
  ${({ theme }) => theme.maxMedia.mobile} {
    h3 {
      font-size: 1rem;
    }
  }
  .classInfo {
    font-size: 0.8rem;
    ${({ theme }) => theme.maxMedia.mobile} {
      font-size: 0.7rem;
    }
  }
  .classTeacher {
    color: #888888;
    padding-top: 0.2rem;
  }
  .classPrice {
    padding-top: 0.2rem;
    ${({ theme }) => theme.maxMedia.mobile} {
      font-size: 0.8rem;
    }
  }
  .classViewCount {
    font-size: 0.8rem;
    color: #888888;
    padding-left: 0.5rem;
    ${({ theme }) => theme.maxMedia.mobile} {
      font-size: 0.7rem;
    }
  }
`
