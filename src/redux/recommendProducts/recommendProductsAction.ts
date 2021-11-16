import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"
import axios from "axios"
export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START" //正在調用api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = //api調用成功
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS"
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL" //api調用失敗

interface IFetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}
interface IFetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS
  payload: any
}
interface IFetchRecommendProductsFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL
  payload: any
}

export type RecommendProductsAction =
  | IFetchRecommendProductsStartAction
  | IFetchRecommendProductsSuccessAction
  | IFetchRecommendProductsFailAction

export const fetchRecommendProductsStartActionCreator =
  (): IFetchRecommendProductsStartAction => {
    return {
      type: FETCH_RECOMMEND_PRODUCTS_START,
    }
  }

export const fetchRecommendProductsSuccessActionCreator = (
  data
): IFetchRecommendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data,
  }
}

export const fetchRecommendProductsFailActionCreator = (
  error
): IFetchRecommendProductsFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error,
  }
}
//thunk可以返回一個函數,而不一定是js對象
//在一個thunk action中可以完成一系列連續action操作
//並且可以處裡非同步邏輯
export const getDataActionCreator =
  (): ThunkAction<void, RootState, unknown, RecommendProductsAction> =>
  async (dispatch, getState) => {
    dispatch(fetchRecommendProductsStartActionCreator())
    try {
      console.log("1111")
      const { data } = await axios.get(
        "http://123.56.149.216:8080/api/productCollections"
      )
      console.log("拿到資料")
      dispatch(fetchRecommendProductsSuccessActionCreator(data))
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchRecommendProductsFailActionCreator(error.message))
      }
    }
  }
