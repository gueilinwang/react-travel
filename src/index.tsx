import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "antd/dist/antd.css"
import App from "./App"
import "./i18n/configs"
import { Provider } from "react-redux"
import rootStore from "./redux/store"
import axios from "axios"
import { PersistGate } from "redux-persist/integration/react"
axios.defaults.headers["x-icode"] = "3FB94394D52974F1"
ReactDOM.render(
  <Provider store={rootStore.store}>
    <PersistGate persistor={rootStore.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)
