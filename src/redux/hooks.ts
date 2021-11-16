import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
import { RootState, AppDispatch } from "./store"
import { Dispatch } from "redux"
/*使用自定義hook來解決store跟組件間的耦合問題,如果不使用,就必須將RootState傳入組件**/
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<Dispatch<AppDispatch>>()
