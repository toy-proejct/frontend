import React from "react"
import styled from "styled-components"
import Image from "next/image"

type ThumbnailsType = {
  image: { id: number; imageAddress: string; imageName: string }[]
}

type ThumbnailListType = {
  imageAddress: string
  imageName: string
  id: number
}

export default function Thumbnails({ image }: ThumbnailsType) {
  return (
    <StyledThumbnailContainer>
      <ThumbnailImgListWrapper>
        {image.map((item) => (
          <ThumbnailImgList
            id={item.id}
            imageAddress={item.imageAddress}
            imageName={item.imageName}
            key={item.id}
          />
        ))}
      </ThumbnailImgListWrapper>
      <div>
        <Image src={image[0].imageAddress} alt={image[0].imageName} layout="fill" />
      </div>
    </StyledThumbnailContainer>
  )
}

function ThumbnailImgList({ id, imageAddress, imageName }: ThumbnailListType) {
  return (
    <StyledThumbnailImgList>
      <button>
        <Image src={imageAddress} alt={imageName} layout="fill" />
      </button>
    </StyledThumbnailImgList>
  )
}

const ThumbnailImgListWrapper = styled.ul`
  padding-right: 0.3rem;
  ${({ theme }) => theme.maxMedia.tablet} {
    display: flex;
    margin-top: 5px;
  }
`

const StyledThumbnailImgList = styled.li`
  width: 56px;
  height: 56px;
  margin-bottom: 3px;
  position: relative;
  border-radius: 5px;
  &:hover {
    border: 2px solid rgb(53, 197, 240) !important;
  }
  button {
    width: 100%;
    height: 100%;
  }
  img {
    border-radius: 5px;
    margin-left: -0.5px !important;
    margin-top: -0.5px !important;
  }
  ${({ theme }) => theme.maxMedia.tablet} {
    margin-right: 5px;
  }
`

const StyledThumbnailContainer = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.maxMedia.tablet} {
    display: flex;
    flex-direction: column-reverse;
  }
  div {
    position: relative;
    width: 100%;
    height: 354px;
    margin-left: 0.5rem;
    ${({ theme }) => theme.maxMedia.tablet} {
      margin: 0;
    }
    img {
      border-radius: 10px;
    }
  }
`
