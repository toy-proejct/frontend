import React from "react"
import styled from "styled-components"
import classReviewType from "src/types/classReviewType"

type ClassReviewListType = {
  review: classReviewType
}

export default function ClassReivewList({ review }: ClassReviewListType) {
  const { teacher, title, detail, userName } = review
  const viewedAt = review.viewedAt.replace("-", ".")
  return (
    <StyledReivewList>
      <h3>{teacher}</h3>
      <p className="reviewTitle">{title}</p>
      <p className="reviewDetail">{detail}</p>
      <div className="reviewWrapper">
        <p>{userName}</p>
        <p>{viewedAt}</p>
      </div>
    </StyledReivewList>
  )
}

const StyledReivewList = styled.li`
  background: rgb(28, 28, 28);
  border-radius: 5px;
  width: 29%;
  padding: 2rem 1rem;
  margin: 1rem 0;
  .reviewTitle {
    font-size: 0.9rem;
    color: #797979;
  }
  .reviewDetail {
    padding: 1rem 0;
    font-size: 0.9rem;
  }
  .reviewWrapper {
    display: flex;
    justify-content: space-between;
    color: #797979;
  }
`
