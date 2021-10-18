import React from "react"
import styles from "./Header.module.css"
import logo from "../../assets/logo.svg"
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd"
import { GlobalOutlined } from "@ant-design/icons"
import { withRouter, RouteComponentProps } from "react-router-dom"
import store from "../../redux/store"
import { ILanguageState } from "../../redux/languageReducer"

interface IHeaderState extends ILanguageState {}
class HeaderComponent extends React.Component<
  RouteComponentProps,
  IHeaderState
> {
  constructor(props) {
    super(props)
    const sotreState = store.getState()
    this.state = {
      language: sotreState.language,
      languageList: sotreState.languageList,
    }
  }
  menuClickHandler = (e) => {
    if (e.key === "new") {
      //處理新語言action
      const action = {
        type: "add_language",
        payload: { code: "new", name: "新語言" },
      }
      store.dispatch(action)
    } else {
      //處理切換語言action
      const action = {
        type: "change_language",
        payload: e.key,
      }
      store.dispatch(action)
    }
  }
  handleStoreChange = () => {
    const newState = store.getState()
    this.setState({
      language: newState.language,
      languageList: newState.languageList,
    })
  }
  componentDidMount() {
    store.subscribe(this.handleStoreChange)
  }
  render() {
    const history = this.props.history
    return (
      <>
        <div className={styles["app-header"]}>
          <div className={styles["top-header"]}>
            <div className={styles.inner}>
              <Typography.Text>讓旅遊更幸福</Typography.Text>
              <Dropdown.Button
                style={{ marginLeft: 15 }}
                overlay={
                  <Menu onClick={this.menuClickHandler}>
                    {this.state.languageList.map((list) => {
                      return <Menu.Item key={list.code}>{list.name}</Menu.Item>
                    })}
                    <Menu.Item key="new">添加新語言</Menu.Item>
                  </Menu>
                }
                icon={<GlobalOutlined />}>
                {this.state.language === "zh" ? "中文" : "English"}
              </Dropdown.Button>
              <Button.Group className={styles["button-group"]}>
                <Button onClick={() => history.push("register")}>註冊</Button>
                <Button onClick={() => history.push("signin")}>登入</Button>
              </Button.Group>
            </div>
          </div>
          <Layout.Header className={styles["main-header"]}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}>
              <img src={logo} alt="logo" className={styles["App-logo"]} />
              <Typography.Title className={styles.title} level={3}>
                React 旅遊網
              </Typography.Title>
            </span>

            <Input.Search
              placeholder="請輸入旅遊目的地、主題或關鍵字"
              className={styles["search-input"]}></Input.Search>
          </Layout.Header>
          <Menu mode={"horizontal"} className={styles["main-menu"]}>
            <Menu.Item key={1}>旅遊首頁</Menu.Item>
            <Menu.Item key={2}>團體</Menu.Item>
            <Menu.Item key={3}>訂房</Menu.Item>
            <Menu.Item key={4}>自由行</Menu.Item>
            <Menu.Item key={5}>高鐵</Menu.Item>
            <Menu.Item key={6}>票券</Menu.Item>
            <Menu.Item key={7}>郵輪</Menu.Item>
            <Menu.Item key={8}>鐵路</Menu.Item>
          </Menu>
        </div>
      </>
    )
  }
}
export const Header = withRouter(HeaderComponent)
