const colors = {}

const size = {
  xLarge: "1100px",
}

const customMediaMaxQuery = (maxWidth: number): string => {
  return `@media(max-width: ${maxWidth}px)`
}

const customMediaMinQuery = (minWidth: number): string => {
  return `@media(min-width: ${minWidth}px)`
}

const maxMedia = {
  mobile: customMediaMaxQuery(767),
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
