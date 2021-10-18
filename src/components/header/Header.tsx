import React from "react"
import styles from "./Header.module.css"
import logo from "../../assets/logo.svg"
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd"
import { GlobalOutlined } from "@ant-design/icons"
import { withRouter, RouteComponentProps } from "react-router-dom"
import store from "../../redux/store"
import { ILanguageState } from "../../redux/languageReducer"
import { withTranslation, WithTranslation } from "react-i18next"

interface IHeaderState extends ILanguageState {}
class HeaderComponent extends React.Component<
  RouteComponentProps & WithTranslation,
  IHeaderState
> {
  constructor(props) {
    super(props)
    const storeState = store.getState()
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
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
    const { history, t } = this.props
    return (
      <>
        <div className={styles["app-header"]}>
          <div className={styles["top-header"]}>
            <div className={styles.inner}>
              <Typography.Text>{t("header.slogan")}</Typography.Text>
              <Dropdown.Button
                style={{ marginLeft: 15 }}
                overlay={
                  <Menu onClick={this.menuClickHandler}>
                    {this.state.languageList.map((list) => {
                      return <Menu.Item key={list.code}>{list.name}</Menu.Item>
                    })}
                    <Menu.Item key="new">
                      {t("header.add_new_language")}
                    </Menu.Item>
                  </Menu>
                }
                icon={<GlobalOutlined />}
              >
                {this.state.language === "zh-TW" ? "中文" : "English"}
              </Dropdown.Button>
              <Button.Group className={styles["button-group"]}>
                <Button onClick={() => history.push("register")}>
                  {t("header.register")}
                </Button>
                <Button onClick={() => history.push("signin")}>
                  {t("header.signin")}
                </Button>
              </Button.Group>
            </div>
          </div>
          <Layout.Header className={styles["main-header"]}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <img src={logo} alt="logo" className={styles["App-logo"]} />
              <Typography.Title className={styles.title} level={3}>
                {t("header.title")}
              </Typography.Title>
            </span>

            <Input.Search
              placeholder={t("header.search_placeholder")}
              className={styles["search-input"]}
            ></Input.Search>
          </Layout.Header>
          <Menu mode={"horizontal"} className={styles["main-menu"]}>
            {Array.from(t("header.navigator", { returnObjects: true })).map(
              (title, i) => {
                return <Menu.Item key={i}>{title}</Menu.Item>
              }
            )}
          </Menu>
        </div>
      </>
    )
  }
}
export const Header = withTranslation()(withRouter(HeaderComponent))
