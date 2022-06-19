import { ReactNode } from "react"
import styled from "styled-components"

type GridProps = {
  gap: number
  colCount: number
  mColumnCount: number
  children: ReactNode
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-gap: ${(props) => (props.gap ? props.gap : 0)}px;
  grid-template-columns: ${(props) =>
    props.mColumnCount ? `repeat(${props.mColumnCount},minmax(120px,1fr))` : ""};
  grid-auto-rows: auto;
  grid-auto-flow: dense;

  @media (min-width: 767px) {
    grid-template-columns: ${(props) =>
      props.colCount ? `repeat(${props.colCount},minmax(180px,1fr))` : ""};
  }
`
