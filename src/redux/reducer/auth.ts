import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
  access_token: string
}

const initialState: AuthState = {
  access_token: "",
}

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.access_token = action.payload
    },
  },
})

export default authslice
export const { setAccessToken } = authslice.actions
