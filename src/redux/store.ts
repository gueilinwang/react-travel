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
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, actionLog, languageChange))
)

export type RootState = ReturnType<typeof store.getState>

export default store
