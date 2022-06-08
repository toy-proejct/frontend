import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styled from "styled-components"
import { ProductType } from "src/types/productType"
import ProductData from "src/components/home/data/productDummy"

export default function ProductId() {
  const [product, setProduct] = useState<ProductType>({})
  const router = useRouter()
  const { productId } = router.query
  useEffect(() => {
    setProduct(ProductData[Number(productId)])
  }, [])
  return (
    <StyledDetailContainer>
      <section>
        <div></div>
        <div></div>
      </section>
      <section>{productId}</section>
    </StyledDetailContainer>
  )
}

const StyledDetailContainer = styled.section`
  max-width: ${({ theme }) => theme.size.xLarge};
  margin: 0 auto;
`
