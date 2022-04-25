import React from "react"
import styled from "styled-components"
import ClassList from "./ClassList"

export default function ClassCateroy() {
  return (
    <StyledClassWrapper>
      <h2>커스텀 키보드 클래스 목록</h2>
      <StyledClassListWrapper>
        <ClassList />
        <ClassList />
        <ClassList />
        <ClassList />
        <ClassList />
        <ClassList />
      </StyledClassListWrapper>
    </StyledClassWrapper>
  )
}

const StyledClassWrapper = styled.section`
  color: white;
  padding: 2rem 0;
`

const StyledClassListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
