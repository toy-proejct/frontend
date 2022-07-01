import { useDispatch } from "react-redux"
import { onClickIsLoginModalTrue } from "src/redux/reducer/modal"
import styled from "styled-components"
import { Flex } from "../shared/Flex"

export function Loginbar() {
  const dispatch = useDispatch()
  const onClickOpenModal = () => {
    dispatch(onClickIsLoginModalTrue())
  }

  return (
    <LoginbarContainer axis="horizontal" space="10px">
      <span onClick={onClickOpenModal}>로그인</span>
      <span>회원가입</span>
    </LoginbarContainer>
  )
}

const LoginbarContainer = styled(Flex).attrs({ axis: "horizontal", space: "10px" })`
  ${({ theme }) => theme.maxMedia.mobile} {
    display: none;
  }
  span {
    cursor: pointer;
  }
`
