import styled from "styled-components"
import React from "react"
import { Field } from "formik"
import LabeldCheckBox from "../common/LabeldCheckBox"

const CheckBoxs = () => {
  return (
    <CheckBoxsContainer>
      <div className="전체동의">
        <LabeldCheckBox
          name="signUpChecks"
          value="전체 동의서"
          label="전체 동의"
          b=""
          type="checkbox"
        />
      </div>
      <LabeldCheckBox
        name="signUpChecks"
        value="만14세 동의서"
        label="만 14세 이상입니다"
        b="(필수)"
        type="checkbox"
      />
      <LabeldCheckBox
        name="signUpChecks"
        value="이용약관서"
        label="이용약관"
        b="(필수)"
        type="checkbox"
      />
      <LabeldCheckBox
        name="signUpChecks"
        value="개인정보수집서"
        label="개인정보수집 및 이용동의"
        b="(필수)"
        type="checkbox"
      />
      <div className="SMS수신서">
        <LabeldCheckBox
          name="signUpChecks"
          value="SMS 수신서"
          label="이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신"
          b="(선택)"
          type="checkbox"
        />
      </div>
    </CheckBoxsContainer>
  )
}

const CheckBoxsContainer = styled.div`
  padding: 14px;
  border: 1px solid #dbdbdb;
  margin-bottom: 30px;
  .전체동의 {
    margin-bottom: 12px;
    border-bottom: 1px solid #dbdbdb;
    label {
      font-size: 15px;
    }
  }
  .SMS수신서 {
    b {
      color: #bdbdbd;
    }
  }
`

export default CheckBoxs
