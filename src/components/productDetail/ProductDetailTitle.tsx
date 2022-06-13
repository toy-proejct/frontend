import React from "react"
import handleCreateAt from "src/utils/handleCreateAt"
import styled from "styled-components"
import Image from "next/image"
import Thumbnails from "../common/Thumbnails"

type ProductDetailTitleType = {
  title: string
  cost: number
  likedAt: number
  createdAt: string
  quantity: number
  productStatus: string
  image: { id: number; imageAddress: string; imageName: string }[]
  viewCount: number
  chatCount: number
}

export default function ProductDetailTitle({
  title,
  cost,
  likedAt,
  createdAt,
  quantity,
  productStatus,
  image,
  viewCount,
  chatCount,
}: ProductDetailTitleType) {
  const changedCreatedAt = handleCreateAt(createdAt)

  return (
    <StyledDetailTitleContainer>
      <Thumbnails image={image} />
      <div className="detailTitleTextWrapper">
        <h2>{title}</h2>
        <p className="detailTitleCost">{cost.toLocaleString()}원</p>
        <div className="detailTitleReportWrapper">
          <span>💖{likedAt} |</span>
          <span> 🕛{changedCreatedAt} |</span>
          <span> 수량: {quantity} |</span>
          <span> 조회: {viewCount} |</span>
          <span> 채팅: {chatCount}</span>
          <button className="detailTitleReportBtn">❗신고하기</button>
        </div>
        <div className="detailTitleTextSubWrapper">
          <span className="detailTitleTextCategory">-상품상태:</span>
          <span>{productStatus}</span>
        </div>
        <div className="detailTitleTextSubWrapper">
          <span className="detailTitleTextCategory">-배송비:</span>
          <span>배송비포함</span>
        </div>
        <div className="detailTitleTextSubWrapper">
          <span className="detailTitleTextCategory">-교환여부:</span>
          <span>교환불가능</span>
        </div>
        <div className="detailChatBtnWrapper">
          <button className="detailLikeBtn">관심{likedAt}</button>
          <button className="detailChatBtn">연락하기</button>
        </div>
      </div>
    </StyledDetailTitleContainer>
  )
}

const StyledDetailTitleContainer = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  column-gap: 30px;
  ${({ theme }) => theme.maxMedia.mobile} {
    display: block;
  }
  .detailTitleTextWrapper {
    position: relative;
    height: 100%;
    width: 100%;
    ${({ theme }) => theme.maxMedia.mobile} {
      padding: 10px 0;
    }
    h2 {
      font-size: 1.5rem;
    }
    .detailTitleCost {
      padding: 0.5rem 0;
      font-size: 1.3rem;
      border-bottom: 1px solid rgb(224, 224, 224);
    }
  }
  .detailTitleReportWrapper {
    padding: 0.5rem 0;
    padding-top: 0.5rem;
    padding-bottom: 2.2rem;
    font-size: 0.9rem;
    position: relative;
    .detailTitleReportBtn {
      font-size: 0.9rem;
      position: absolute;
      right: 0;
    }
  }
  .detailTitleTextSubWrapper {
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
    .detailTitleTextCategory {
      color: rgb(140, 140, 140);
      display: inline-block;
      width: 70px;
    }
  }
  .detailChatBtnWrapper {
    ${({ theme }) => theme.maxMedia.mobile} {
      position: relative;
      padding-top: 20px;
    }
    position: absolute;
    bottom: 0;
    button {
      font-size: 14px;
      border-radius: 4px;
      font-weight: 400;
      width: 130px;
      height: 45px;
      text-align: center;
      color: #ffffff;
      font-weight: bold;
      margin-right: 20px;
    }
    .detailLikeBtn {
      background: rgb(204, 204, 204);
    }
    .detailChatBtn {
      background: rgb(53, 202, 244);
    }
  }
`
