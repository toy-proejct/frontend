import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { rootReducer } from "../reducer"

const devMode = process.env.NODE_ENV === "development"

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: devMode,
  })
  return store
}

export const wrapper = createWrapper(createStore, {
  debug: devMode,
})
