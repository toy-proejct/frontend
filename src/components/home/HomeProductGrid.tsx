import styled from "styled-components"
import ProductList from "../common/ProductList"
import { Grid } from "../shared/Grid"
import ProductData from "./data/productDummy"

export default function HomeProductGrid() {
  return (
    <HomeProductGridContainer>
      {ProductData.map((product, idx) => {
        return <ProductList product={product} key={product.boardId} />
      })}
    </HomeProductGridContainer>
  )
}

const HomeProductGridContainer = styled(Grid).attrs({
  gap: 20,
  colCount: 4,
  mColumnCount: 2,
})``
