import React, { useEffect, useState } from "react"
import UserProfileType from "src/types/userProfile"
import userProfileData from "../productDetail/data/userProfileDummy"
import userDefaultImage from "public/statics/user/user_default.webp"
import Link from "next/link"
import styled from "styled-components"
import Image from "next/image"

// User 링크, Data받기

export function UserProfile() {
  const [user, setUser] = useState<UserProfileType | null>(null)

  useEffect(() => {
    setUser(userProfileData)
  }, [])

  return (
    <StyledDetailUserWrapper>
      {user && (
        <Link href="#" passHref>
          <StyledDetailUserLink>
            <div className="detailUserImgWrapper">
              <Image
                src={user.profileImage ? user.profileImage : userDefaultImage}
                alt="user"
                width={user.profileImage ? 40 : 25}
                height={user.profileImage ? 40 : 25}
              />
            </div>
            <div className="detailUserTextWrapper">
              <StyledDetailUserNickname className="detailUserNickname">
                {user.nickname}
              </StyledDetailUserNickname>
              <span className="detailUserCredibility">신뢰도: {user.credibility}/5 </span>
              <span className="detailUserFollowCount">| 팔로워: {user.followCount}</span>
            </div>
          </StyledDetailUserLink>
        </Link>
      )}
    </StyledDetailUserWrapper>
  )
}

const StyledDetailUserWrapper = styled.div`
  border-bottom: 1px solid rgb(237, 237, 237);
  .detailUserImgWrapper {
    background:rgb(230 230 230);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    img {
      invert(90%) sepia(28%) saturate(5%) hue-rotate(110deg) brightness(84%) contrast(83%);
    }
  }
  .detailUserTextWrapper{
    margin-left:0.5rem;
    span{
      font-size:0.9rem;
      color: rgb(150, 142, 177);
    }
  }
`

const StyledDetailUserLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.7rem 0;
`

const StyledDetailUserNickname = styled.p`
  ${StyledDetailUserLink}:hover & {
    text-decoration: underline;
  }
`
