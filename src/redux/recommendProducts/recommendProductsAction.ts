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
