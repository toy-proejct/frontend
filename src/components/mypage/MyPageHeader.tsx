import styled from "styled-components"
import React, { useEffect, useState } from "react"
import { Center } from "../shared/Center"
import MyPageNavbar from "./MyPageNavbar"

const MyPageHeader = () => {
  return (
    <MyPageHeaderContainer>
      <Center variant="regular">
        <MyPageNavbar />
      </Center>
    </MyPageHeaderContainer>
  )
}

const MyPageHeaderContainer = styled.div``

export default MyPageHeader
