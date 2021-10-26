import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "antd/dist/antd.css"
import App from "./App"
import "./i18n/configs"
import { Provider } from "react-redux"
import store from "./redux/store"
import axios from "axios"
axios.defaults.headers["x-icode"] = "05C2A443F4A657FA"
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
