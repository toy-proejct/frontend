import { NextPage } from "next";
import styled from "styled-components";
import Header from "../../components/common/Header";
import QuestionList from "../../components/community/QuestionList";
import Search from "../../components/community/Search";

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