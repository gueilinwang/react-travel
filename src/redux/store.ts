import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { createStore, applyMiddleware } from "redux"
// import thunk from "redux-thunk"  RTK自帶插件
// import { composeWithDevTools } from "redux-devtools-extension"  RTK自帶插件
import languageReducer from "./language/languageReducer"
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer"
import { actionLog } from "./middlewares/actionLog"
import { languageChange } from "./middlewares/languageChange"
import productDetailReducer from "./productDetail/slice"
import productSearchReducer from "./productSearch/slice"
import userSliceReducer from "./user/slice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], //只會保存rootReducer中的user資料
}
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailReducer,
  productSearch: productSearchReducer,
  user: userSliceReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
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

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk, actionLog, languageChange))
// )

const store = configureStore({
  reducer: persistedReducer, //將rootReducer換成persistedReducer
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    actionLog,
    languageChange,
  ],
  devTools: true,
})
const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default { store, persistor }
