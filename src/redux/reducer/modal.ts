import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  switch: boolean
  isOpenReport: boolean
}

const initialState: ModalState = {
  switch: false,
  isOpenReport: false,
}

const modalslice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModalSwitchFalse: (state) => {
      state.switch = false
    },
    changeModalSwitchTrue: (state) => {
      state.switch = true
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
  changeModalSwitchFalse,
  changeModalSwitchTrue,
  onClickReportModalOpenBtn,
  onClickReportExitBtn,
} = modalslice.actions
