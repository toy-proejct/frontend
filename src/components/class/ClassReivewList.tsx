import React from "react"
import styled from "styled-components"

export default function ClassReivewList() {
  return (
    <StyledReivewList>
      <h3>김김공방</h3>
      <p className="reviewTitle">커스텀 키보드 기초 강의</p>
      <p className="reviewDetail">
        이번에 수강을 했는데 설명도 친절하고 너무 좋았습니다 이번에 수강을 했는데 설명도 친절하고
        너무 좋았습니다.이번에 수강을 했는데 설명도 친절하고 너무 좋았습니다.이번에 수강을 했는데
        설명도 친절하고 너무 좋았습니다.이번에 수강을 했는데 설명도 친절하고 너무 좋았습니다.이번에
        수강을 했는데 설명도 친절하고 너무 좋았습니다
      </p>
      <div className="reviewWrapper">
        <p>혜빈</p>
        <p>2022.04.25</p>
      </div>
    </StyledReivewList>
  )
}

const StyledReivewList = styled.li`
  background: rgb(28, 28, 28);
  border-radius: 5px;
  width: 29%;
  padding: 2rem 1rem;
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
