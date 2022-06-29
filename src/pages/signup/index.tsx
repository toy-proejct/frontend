import styled from "styled-components"
import SignUpForm from "src/components/signup/SignUpForm"

export default function Signup() {
  return (
    <SignupContainer>
      <SingupCenter>
        <h1>추가 정보 입력</h1>
        <SignUpForm />
      </SingupCenter>
    </SignupContainer>
  )
}

const SignupContainer = styled.div`
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 25px;
  }
`
const SingupCenter = styled.div`
  max-width: 320px;
  margin: 50px auto;
`
