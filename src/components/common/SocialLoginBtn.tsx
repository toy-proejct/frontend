import React from "react"
import Image, { StaticImageData } from "next/image"
import styled from "styled-components"

type SocialLoginBtnType = {
  img: StaticImageData
  social: "카카오" | "깃허브" | "네이버"
  href: string
}

export default function SocialLoginBtn({ img, social, href }: SocialLoginBtnType) {
  return (
    <StyledSocialLoginBtn>
      <a href={href}>
        <Image src={img} width="30" height="30" />
        <span>{social}로 이용하기</span>
      </a>
    </StyledSocialLoginBtn>
  )
}

const StyledSocialLoginBtn = styled.button`
  padding: 0;
  width: 100%;
  height: 38px;
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 7px 0px;
  background: rgb(255, 255, 255);
  text-align: center;
  border-radius: 4px;
  margin-bottom: 12px;
  position: relative;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  span {
    padding-left: 5px;
  }
`
