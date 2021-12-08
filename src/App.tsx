import React, { FunctionComponent } from "react"
import styles from "./App.module.css"
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  RouteProps,
} from "react-router-dom"
import { useAppSelector } from "./redux/hooks"
import {
  HomePage,
  SignInPage,
  RegisterPage,
  DetailPage,
  SearchPage,
  ShoppingCart,
} from "./pages"
interface IPrivateRouteProps extends RouteProps {
  component: FunctionComponent<any>
  isAuthenticated: boolean
}
const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component,
  isAuthenticated,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route render={component} {...rest} />
  ) : (
    <Redirect to={{ pathname: "/signIn" }} />
  )
}

const App: React.FC = () => {
  const jwt = useAppSelector((s) => s.user.token)
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
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/shoppingCart"
            component={ShoppingCart}
          />
          {/**放在最後預設為沒匹配到path的情況 */}
          <Route render={() => <h1>404 not found</h1>} />{" "}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
