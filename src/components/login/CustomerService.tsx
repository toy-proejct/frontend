import styled from "styled-components"
import React from "react"

const CustomerService = () => {
  return (
    <CustomerServiceContainer>
      <div className="customer-service">
        <p>
          도움이 필요하면<span>이메일</span> 또는 고객센터1670-2910로 문의 부탁드립니다.고객센터
          운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
        </p>
      </div>
    </CustomerServiceContainer>
  )
}

const CustomerServiceContainer = styled.div`
  .customer-service {
    padding: 3.5rem 1em 0.5rem;
    font-size: 12px;
    line-height: 1.5;
    color: rgb(153, 153, 153);
    > p {
      width: 100%;
      border-top: 1px solid rgb(229, 229, 229);
      padding-top: 1rem;
      span {
        text-decoration: underline;
        color: rgb(102, 102, 102);
      }
    }
  }
`

export default CustomerService
