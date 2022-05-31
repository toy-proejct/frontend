import styled from "styled-components"
import QuestionList from "src/components/community/QuestionList"
import Search from "src/components/community/Search"
import Layout from "src/components/layout/app/Layout"
import { ReactElement } from "react"

const CommunityContainer = styled.div``

export default function Community() {
  return (
    <CommunityContainer>
      <Search />
      <QuestionList />
    </CommunityContainer>
  )
}
