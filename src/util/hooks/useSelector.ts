import { TypedUseSelectorHook, useSelector as useAppSelector } from "react-redux"
import { RootState } from "src/redux/reducer"

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector
