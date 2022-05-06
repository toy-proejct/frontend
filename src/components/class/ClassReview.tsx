import React, { useState } from "react"
import styled from "styled-components"
import ClassReivewList from "./ClassReivewList"
import Image from "next/image"
import bottomArrow from "../../../public/statics/main/bottomArrow.jpg"
import reviewData from "./data/classReviewDummy"

export default function ClassReview() {
  const [currentReviewPage, setCurrentReviewPage] = useState(3)
  const onClickMoreBtn = () => {
    setCurrentReviewPage(currentReviewPage + 3)
  }
  return (
    <StyledClassContainer>
      <h2>수강생 리뷰</h2>
      <StyledReviewWrapper>
        {reviewData.map((review, idx) => {
          if (idx < currentReviewPage) {
            return <ClassReivewList review={review} key={review.id} />
          }
        })}
      </StyledReviewWrapper>
      <StyledReviewMoreWrapper>
        <StyledMoreBtn onClick={onClickMoreBtn}>
          <Image src={bottomArrow} width={25} height={25} />
          {currentReviewPage > reviewData.length ? "리뷰가 존재하지 않습니다" : "리뷰 더보기"}
        </StyledMoreBtn>
      </StyledReviewMoreWrapper>
    </StyledClassContainer>
  )
}

const StyledReviewWrapper = styled.ul`
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledMoreBtn = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  transition: 0.1s filter;
  &:hover {
    filter: brightness(0.5) invert(1);
  }
`

const StyledReviewMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    filter: brightness(0) invert(1);
  }
`

const StyledClassContainer = styled.section`
  padding-bottom: 4rem;
`
