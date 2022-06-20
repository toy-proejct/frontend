import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { Center } from "../shared/Center"
import MyPageNavbar from "./MyPageNavbar"

const MyPageNav = () => {
  return (
    <MyPageNavContainer>
      <Center variant="regular">
        <MyPageNavbar />
      </Center>
    </MyPageNavContainer>
  )
}

const MyPageNavContainer = styled.div`
  border-bottom: 1px solid #ededed;
  ${({ theme }) => theme.minMedia.mobile} {
    border-top: 1px solid #ededed;
  }
`

export default MyPageNav
