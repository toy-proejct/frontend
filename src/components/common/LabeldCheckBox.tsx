import styled from "styled-components"
import React from "react"
import { Field, FieldAttributes, useField } from "formik"
import { Flex } from "../shared/Flex"

const LabeldCheckBox = ({ label, b, ...props }) => {
  const [field, meta, helpers] = useField(props)
  return (
    <LabeldCheckBoxContainer>
      <Field {...field} {...props} />
      <label>
        {label}
        <b>{b}</b>
      </label>
    </LabeldCheckBoxContainer>
  )
}

const LabeldCheckBoxContainer = styled(Flex).attrs({ space: "8px", alignment: "center" })`
  margin-bottom: 12px;
  > input {
    height: 22px;
    width: 22px;
    border-radius: 4px;
    background-color: #fafafa;
  }
  label {
    font-size: 12px;
  }
  b {
    color: #35c5f0;
    margin-left: 5px;
    font-weight: 500;
  }
`

export default LabeldCheckBox
