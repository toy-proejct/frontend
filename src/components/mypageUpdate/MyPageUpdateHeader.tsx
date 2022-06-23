import styled from "styled-components"
import React, { ReactNode } from "react"
import { Flex } from "../shared/Flex"
import Link from "next/link"

const MyPageUpdateFormHeader = () => {
  return (
    <MyPageUpdateFormHeaderContainer>
      <Flex space="evenly">
        <FormHeaderTitle>회원정보수정</FormHeaderTitle>
        <Link href="/탈퇴" passHref>
          <StyleLink>탈퇴하기</StyleLink>
        </Link>
      </Flex>
    </MyPageUpdateFormHeaderContainer>
  )
}

export default MyPageUpdateFormHeader

const MyPageUpdateFormHeaderContainer = styled.div`
  margin-bottom: 60px;
`

const FormHeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
`

const StyleLink = styled.a`
  font-size: 14px;
  color: #ccc;
  text-decoration: underline;
`
