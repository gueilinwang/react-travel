import React from "react"
import styles from "./App.module.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  SearchPage,
} from "./pages"
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      {/*當匹配到第一個符合的path,就會break*/}
      <BrowserRouter>
        <Switch>
          {/**exact屬性表示需與path完全相符才算匹配 */}
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          {/**參數須直接寫在path中,使用冒號串接 */}
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/search/:keywords?" component={SearchPage} />
          {/**放在最後預設為沒匹配到path的情況 */}
          <Route render={() => <h1>404 not found</h1>} />{" "}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
