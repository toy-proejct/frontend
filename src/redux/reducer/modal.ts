import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  isLoginModal: boolean
  isOpenReport: boolean
}

const initialState: ModalState = {
  isLoginModal: false,
  isOpenReport: false,
}

const modalslice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onClickIsLoginModalFalse: (state) => {
      state.isLoginModal = false
    },
    onClickIsLoginModalTrue: (state) => {
      state.isLoginModal = true
    },
    onClickReportModalOpenBtn: (state) => {
      state.isOpenReport = true
    },
    onClickReportExitBtn: (state) => {
      state.isOpenReport = false
    },
  },
})

export default modalslice
export const {
  onClickIsLoginModalFalse,
  onClickIsLoginModalTrue,
  onClickReportModalOpenBtn,
  onClickReportExitBtn,
} = modalslice.actions
