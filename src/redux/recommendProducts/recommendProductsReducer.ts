import {
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  RecommendProductsAction,
} from "./recommendProductsAction"
interface IRecommendProductsState {
  productLists: any[]
  isLoading: boolean
  error: string | null
}
const defaultRecommendProductsState: IRecommendProductsState = {
  isLoading: true,
  error: null,
  productLists: [],
}

const recommendProductsReducer = (
  state = defaultRecommendProductsState,
  action: RecommendProductsAction
) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, isLoading: true }
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, productLists: action.payload }

    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}
export default recommendProductsReducer
