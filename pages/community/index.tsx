import { NextPage } from "next";
import styled from "styled-components";
import Header from "../../src/components/common/Header";
import QuestionList from "../../src/components/community/QuestionList";
import Search from "../../src/components/community/Search";

const CommunityContainer = styled.div`
`

const Community: NextPage = () => {
    return (
        <CommunityContainer>
            <Header />
            <Search />
            <QuestionList />
        </CommunityContainer>
    )
}

export default Community;