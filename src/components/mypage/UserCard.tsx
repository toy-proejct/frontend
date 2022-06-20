import styled from "styled-components"
import React from "react"
import { Flex } from "../shared/Flex"
import Image from "next/image"
import ProfileImg from "/public/statics/users/[id]/userimg.jpg"

const UserCard = () => {
  return (
    <UserCardContainer>
      <Flex>
        <UserProfileImg />
        <UserInfo />
      </Flex>
    </UserCardContainer>
  )
}

const UserCardContainer = styled.div`
  padding: 30px 20px 30px 20px;
  border-bottom: 1px solid #ededed;
  ${({ theme }) => theme.minMedia.mobile} {
    width: 1140px;
    margin: 0 auto;
    border: none;
  }
`

export default UserCard

const UserProfileImg = () => {
  return (
    <UserProfileImgContainer>
      <Image src={ProfileImg} alt="유저프로필이미지" layout="fill" />
    </UserProfileImgContainer>
  )
}

const UserProfileImgContainer = styled.div`
  position: relative;
  width: 84px;
  height: 84px;
  margin-right: 20px !important;
  border-radius: 100%;
  background-color: #ededed;
  overflow: hidden;
`

const UserInfo = () => {
  return (
    <UserInfoContainer>
      <h1>야울해</h1>
      <p>
        <span>팔로워 </span>
        <b>0</b>
        <i />
        <span>팔로잉 </span>
        <b>0</b>
      </p>
      <button>설정</button>
    </UserInfoContainer>
  )
}

const UserInfoContainer = styled.div`
  > h1 {
    margin: 0 0 3px;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
    color: #292929;
    overflow-wrap: break-word;
    word-break: break-all;
  }
  > p {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: rgb(130, 140, 148);
    margin-bottom: 7px;
    > b {
      display: inline-block;
      margin-right: 10px;
      font-weight: bold;
      color: rgb(82, 91, 97);
    }
    > i {
      display: inline-block;
      width: 1px;
      height: 9px;
      margin-right: 9px;
      background-color: rgb(218, 220, 224);
    }
  }
  > button {
    padding: 5px 16px 6px;
    border: 1px solid #dbdbdb;
    font-size: 12px;
    color: rgb(41, 41, 41);
    background-color: #fff;
    border-radius: 4px;
  }
`
