import { createSlice } from "@reduxjs/toolkit"

export interface ModalState {
  switch: boolean
}

const initialState: ModalState = {
  switch: false,
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
  },
})

export default modalslice
export const { changeModalSwitchFalse, changeModalSwitchTrue } = modalslice.actions
