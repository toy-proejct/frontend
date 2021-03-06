import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styled from "styled-components"
import ProductDetailData from "src/components/productDetail/data/productDetailDummy"
import ProductDetailType from "src/types/productDetailType"
import ProductDetailTitle from "src/components/productDetail/ProductDetailTitle"
import ProductDetailInfo from "src/components/productDetail/ProductDetailInfo"
import { UserProfile } from "src/components/common/UserProfile"

export default function ProductId() {
  const [product, setProduct] = useState<ProductDetailType>(ProductDetailData)
  const {
    title,
    cost,
    image,
    detail,
    likedAt,
    productStatus,
    quantity,
    createdAt,
    viewCount,
    chatCount,
  } = product
  const router = useRouter()
  const { productId } = router.query

  const handleAddViewCount = (id: string) => {
    const isExistedVistedSession = sessionStorage.getItem("recentlyVisitedProducts")

    if (isExistedVistedSession) {
      const isExistedCurrentProductId = sessionStorage
        .getItem("recentlyVisitedProducts")!
        .split(",")
        .includes(id)

      if (!isExistedCurrentProductId) {
        const sessionVistedProduct = JSON.parse(sessionStorage.getItem("recentlyVisitedProducts")!)
        sessionVistedProduct.push(id)
        sessionStorage.setItem("recentlyVisitedProducts", JSON.stringify(sessionVistedProduct))
        setProduct({ ...product, viewCount: product.viewCount + 1 })
      }
    }

    if (!isExistedVistedSession) {
      sessionStorage.setItem("recentlyVisitedProducts", JSON.stringify([productId as string]))
      setProduct({ ...product, viewCount: product.viewCount + 1 })
    }
  }

  useEffect(() => {
    if (router.isReady) {
      handleAddViewCount(productId as string)
    }
  }, [router.isReady])

  return (
    <StyledDetailContainer>
      <ProductDetailTitle
        title={title}
        cost={cost}
        image={image}
        createdAt={createdAt}
        likedAt={likedAt}
        productStatus={productStatus}
        quantity={quantity}
        viewCount={viewCount}
        chatCount={chatCount}
      />
      <UserProfile />
      <ProductDetailInfo detail={detail} />
    </StyledDetailContainer>
  )
}

const StyledDetailContainer = styled.main`
  width: ${({ theme }) => theme.size.xLarge};
  ${({ theme }) => theme.maxMedia.notebook} {
    max-width: ${({ theme }) => theme.size.large};
  }
  ${({ theme }) => theme.maxMedia.tablet} {
    max-width: ${({ theme }) => theme.size.middle};
  }
  ${({ theme }) => theme.maxMedia.mobile} {
    max-width: ${({ theme }) => theme.size.small};
  }
  ${({ theme }) => theme.maxMedia.smallMobile} {
    max-width: ${({ theme }) => theme.size.xsmall};
    padding-right: 1rem;
    padding-left: 1rem;
  }
  ${({ theme }) => theme.maxMedia.minimun} {
    width: 100%;
  }
  padding: 1.5rem 0;
  margin: 0 auto;
`
