import MyPageNav from "src/components/mypage/MyPageHeader"
import QuestionNavSelected from "src/components/mypage/QuestionNavSelected"
import UserCard from "src/components/mypage/UserCard"
import styled from "styled-components"

const Mypage = () => {
  return (
    <MypageContainer>
      <UserCard />
      <MyPageNav />
      <QuestionNavSelected />
    </MypageContainer>
  )
}

const MypageContainer = styled.div`
  padding-top: 45px;
  ${({ theme }) => theme.minMedia.mobile} {
    padding-top: 75px;
  }
`

export default Mypage
