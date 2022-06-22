import MypageUpdateForm from "src/components/mypageUpdate/MypageUpdateForm"
import MyPageUpdateHeader from "src/components/mypageUpdate/MyPageUpdateHeader"
import { Center } from "src/components/shared/Center"
import styled from "styled-components"

const Edit = () => {
  return (
    <EditContainer>
      <CenterAlign>
        <MyPageUpdateHeader />
        <MypageUpdateForm />
      </CenterAlign>
    </EditContainer>
  )
}

const EditContainer = styled.div`
  padding: 45px 30px 60px;
  ${({ theme }) => theme.minMedia.mobile} {
    padding-top: 30px;
  }
`
const CenterAlign = styled(Center).attrs({ variant: "regular" })`
  ${({ theme }) => theme.minMedia.mobile} {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
    padding: 80px 50px 130px;
  }
`

export default Edit
