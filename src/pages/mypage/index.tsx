import MyPageHeader from "src/components/mypage/MyPageHeader"
import styled from "styled-components"

const Mypage = () => {
  return (
    <MypageContainer>
      <MyPageHeader />
    </MypageContainer>
  )
}

const MypageContainer = styled.div`
  padding-top: 75px;
`

export default Mypage
