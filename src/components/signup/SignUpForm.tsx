import styled from "styled-components"
import React from "react"
import { Field, Form, Formik } from "formik"
import { Center } from "../shared/Center"
import CheckBoxs from "./CheckBoxs"

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        email: "이메일",
        nickname: "",
        signUpChecks: [],
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
      }}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form>
          <SignUpFormContainer>
            <Field name="email" className="email_input" disabled={true} placeholder="유저 이메일" />
            <Field name="nickname" className="nickname_input" placeholder="닉네임을 입력해주세요" />
            <CheckBoxs />
            <button type="submit">회원가입 완료</button>
          </SignUpFormContainer>
        </Form>
      )}
    </Formik>
  )
}

const SignUpFormContainer = styled.div`
  input[name="email"] {
    margin-bottom: 25px;
  }
  .email_input {
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    color: #757575;
    -webkit-text-fill-color: #757575;
    border: 1px solid #dbdbdb;
    background-color: #ededed;
  }

  .nickname_input {
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: #424242;
    margin-bottom: 30px;
  }

  button {
    width: 100%;
    padding: 11px 10px;
    font-size: 17px;
    line-height: 26px;
    background-color: #35c5f0;
    border-color: #35c5f0;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  }
`

export default SignUpForm
