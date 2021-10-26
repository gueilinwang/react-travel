import { createStore, combineReducers, applyMiddleware } from "redux"
import languageReducer from "./language/languageReducer"
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer"
import thunk from "redux-thunk"
import { actionLog } from "./middlewares/actionLog"
import { languageChange } from "./middlewares/languageChange"

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
})
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, actionLog, languageChange)
)

export type RootState = ReturnType<typeof store.getState>

export default store
