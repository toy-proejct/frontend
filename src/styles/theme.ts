const colors = {}

const size = {
  xLarge: "1100px",
  large: "900px",
  middle: "750px",
  small: "600px",
  xsmall: "460px",
  minimun: "380px",
}

const customMediaMaxQuery = (maxWidth: number): string => {
  return `@media(max-width: ${maxWidth}px)`
}

const customMediaMinQuery = (minWidth: number): string => {
  return `@media(min-width: ${minWidth}px)`
}

const maxMedia = {
  notebook: customMediaMaxQuery(1110),
  tablet: customMediaMaxQuery(920),
  mobile: customMediaMaxQuery(767),
  smallMobile: customMediaMaxQuery(620),
  minimun: customMediaMaxQuery(420),
}

const minMedia = {
  mobile: customMediaMinQuery(767),
}

const view = {
  tablet: "1024px",
  mobile: "768px",
}

const theme = {
  colors,
  size,
  view,
  maxMedia,
  minMedia,
}

export default theme
