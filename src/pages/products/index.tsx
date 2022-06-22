import React, { useEffect, useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import ProductList from "../../components/common/ProductList"
import ProductData from "../../components/home/data/productDummy"
import { ProductType } from "../../types/productType"
import PageNation from "../../components/common/PageNation"
import { useRouter } from "next/router"
import sortArrItems from "../../utils/sortArrItems"
import Link from "next/link"
import { Grid } from "src/components/shared/Grid"

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [currentPageProducts, setCurrentPageProducts] = useState<ProductType[]>([])
  const [isActivedFilter, setIsActivedFilter] = useState([
    { id: 0, active: true, text: "최신순" },
    { id: 1, active: false, text: "인기순" },
    { id: 2, active: false, text: "저가순" },
    { id: 3, active: false, text: "고가순" },
  ])
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()
  const ONEPAGEMAXDATA = 16

  const sortProductsItem = (targetText: string) => {
    if (currentPageProducts.length) {
      setCurrentPageProducts(sortArrItems(targetText, currentPageProducts))
    }
  }
  const changeActivedFilter = (targetText: string) => {
    const changedIsActiveFilter = isActivedFilter.map((item) => {
      if (item.active) {
        return { ...item, active: false }
      }
      if (item.text === targetText) {
        return { ...item, active: true }
      }
      return item
    })
    setIsActivedFilter(changedIsActiveFilter)
  }

  const onClickProductFilterBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    let currentActivedText: null | string = null
    const targetText = event.currentTarget.textContent
    isActivedFilter.forEach((item) => {
      if (item.active) currentActivedText = item.text
    })
    if (currentActivedText !== targetText) {
      sortProductsItem(targetText)
      changeActivedFilter(targetText)
    }
  }

  useEffect(() => {
    if (!products.length) {
      setProducts(ProductData)
    }
    if (router.isReady) {
      if (!router.query.page) {
        setCurrentPageProducts(
          ProductData.slice((currentPage - 1) * ONEPAGEMAXDATA, currentPage * ONEPAGEMAXDATA),
        )
      }
      if (router.query.page) {
        const pageQuery = Number(router.query.page)
        setCurrentPage(pageQuery)
        setCurrentPageProducts(
          ProductData.slice((pageQuery - 1) * ONEPAGEMAXDATA, pageQuery * ONEPAGEMAXDATA),
        )
      }
    }
  }, [router.query, router.isReady, currentPage, products.length])

  return (
    <>
      <Head>
        <title>Value Board | 커스텀 키보드 판매</title>
        <meta name="description" content="커스텀 키보드 판매, 커뮤니티는 Keyboard Value로!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledProductContainer>
        <StyledProductWrapper>
          <StyeldProductTitleWrapper>
            <h3>현재 판매중인 키보드</h3>
            <StyledProductFilterWrapper>
              {isActivedFilter.map((item, idx) => (
                <li key={item.id}>
                  <StyledProductFilterBtn
                    className="productFilterBtn"
                    onClick={onClickProductFilterBtn}
                    active={item.active}
                  >
                    {item.text}
                  </StyledProductFilterBtn>
                  {idx !== isActivedFilter.length - 1 && <span>|</span>}
                </li>
              ))}
            </StyledProductFilterWrapper>
          </StyeldProductTitleWrapper>
          <StyledContentWrapper>
            {currentPageProducts.map((product) => (
              <ProductList key={product.boardId} product={product} />
            ))}
          </StyledContentWrapper>
          <PageNation
            onePageMaxData={ONEPAGEMAXDATA}
            dataLength={products.length}
            currentPage={currentPage}
          />
          <StyledNewLinkWrapper>
            <Link href="/products/new" passHref>
              <StyledNewLink>글쓰기</StyledNewLink>
            </Link>
          </StyledNewLinkWrapper>
        </StyledProductWrapper>
      </StyledProductContainer>
    </>
  )
}

const StyledNewLinkWrapper = styled.div`
  position: sticky;
  bottom: 50px;
  right: 15px;
  float: right;
  margin-right: 14px;
  margin-top: -30px;
`

const StyledNewLink = styled.a`
  font-size: 14px;
  border-radius: 4px;
  padding: 9.5px 30px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  background: rgb(53, 202, 244);
  font-weight: bold;
`

const StyledProductFilterBtn = styled.button<{ active: boolean }>`
  padding: 0 0.2rem;
  color: ${({ active }) => active && "#35c5f0"};
  ${({ active }) => !active && "&:hover {color:#919191}"};
`

const StyeldProductTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledProductFilterWrapper = styled.ul`
  display: flex;
  span {
    font-size: 0.9rem;
    color: rgb(204, 204, 204);
  }
`

const StyledProductContainer = styled.section`
  background: rgb(249, 249, 249);
  width: 100%;
`

const StyledProductWrapper = styled.div`
  max-width: ${({ theme }) => theme.size.xLarge};
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 5rem;

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
  }
  ${({ theme }) => theme.maxMedia.minimun} {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`
const StyledContentWrapper = styled(Grid).attrs({
  gap: 20,
  colCount: 4,
  mColumnCount: 3,
})`
  padding: 1rem 0;
`
