import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import languageReducer from "./language/languageReducer"
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer"
import { actionLog } from "./middlewares/actionLog"
import { languageChange } from "./middlewares/languageChange"

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
})
/**
const combinReducers=(reducer)=>{
  reutrn (state={},action)=>{
    return Object.keys(reducer).reduce((nextState,key)=>{
      nextState[key]=reducer[key](state[key],action)
      return nextState
    },{})
  }
}
combinReducers實際上操作類似以下方式
const rootReducer=(state={},action)=>{
  return {
    language:languageReducer(state.language,action),
    recommendProducts:recommendProductsReducer(state.recommendProducts,action)
  }
}
*/
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, actionLog, languageChange))
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

export default store
