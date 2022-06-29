import { AnyAction } from "@reduxjs/toolkit"
import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

type Props = {
  children: React.ReactNode
  onClickExitBtn: () => AnyAction
}

export default function Modal({ children, onClickExitBtn }: Props) {
  const dispatch = useDispatch()

  const clickModalSection = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget === e.target) {
      dispatch(onClickExitBtn())
    }
  }

  const clickExitBtn = () => {
    dispatch(onClickExitBtn())
  }

  return (
    <StyledModalContainer onClick={clickModalSection}>
      <div className="content">
        <div className="exitBtnWrapper">
          <button className="exitBtn" onClick={clickExitBtn}>
            X
          </button>
        </div>
        {children}
      </div>
    </StyledModalContainer>
  )
}

const StyledModalContainer = styled.section`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .content {
    background: white;
    width: 500px;
    padding: 3rem;
    position: relative;
    border-radius: 12px;
  }
  .exitBtnWrapper {
    position: relative;
    .exitBtn {
      border: none;
      padding: 0 0.2rem;
      font-size: 1.1rem;
      background: white;
      cursor: pointer;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`
