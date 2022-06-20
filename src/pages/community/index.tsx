import styled from "styled-components"
import QuestionList from "src/components/community/QuestionList"
import Search from "src/components/community/Search"

const CommunityContainer = styled.div`
  padding-top: 75px;
`

export default function Community() {
  return (
    <CommunityContainer>
      <Search />
      <QuestionList />
    </CommunityContainer>
  )
}
