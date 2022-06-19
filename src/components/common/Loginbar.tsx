import { useDispatch } from "react-redux"
import { changeModalSwitchTrue } from "src/redux/reducer/modal"
import styled from "styled-components"
import { Flex } from "../shared/Flex"

export function Loginbar() {
  const dispatch = useDispatch()
  const onClickOpenModal = () => {
    dispatch(changeModalSwitchTrue())
  }

  return (
    <LoginbarContainer axis="horizontal" space="10px">
      <div onClick={onClickOpenModal}>로그인</div>
      <div>회원가입</div>
    </LoginbarContainer>
  )
}

const LoginbarContainer = styled(Flex).attrs({ axis: "horizontal", space: "10px" })`
  ${({ theme }) => theme.maxMedia.mobile} {
    display: none;
  }
`