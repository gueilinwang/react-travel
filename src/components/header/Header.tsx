import React from "react"
import styles from "./Header.module.css"
import logo from "../../assets/logo.svg"
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd"
import { GlobalOutlined } from "@ant-design/icons"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { RootState } from "../../redux/store"
import { withTranslation, WithTranslation } from "react-i18next"
import {
  changeLanguageActionCreator,
  addLanguageActionCreator,
} from "../../redux/language/languageActions"
import { connect } from "react-redux"
import { Dispatch } from "redux"
const mapStateToProps = (state: RootState) => {
  return {
    language: state.language,
    languageList: state.languageList,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: "zh-TW" | "en") => {
      const action = changeLanguageActionCreator(code)
      dispatch(action)
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code)
      dispatch(action)
    },
  }
}
type HeaderPropsType = RouteComponentProps & //react-router路由props類型
  WithTranslation & //i18n props類型
  ReturnType<typeof mapStateToProps> & //redux store映射類型
  ReturnType<typeof mapDispatchToProps> //redux dispatch映射類型
class HeaderComponent extends React.Component<HeaderPropsType> {
  menuClickHandler = (e) => {
    if (e.key === "new") {
      //處理新語言action
      this.props.addLanguage("新語言", "new")
    } else {
      //處理切換語言action
      this.props.changeLanguage(e.key)
    }
  }

  showNavigator = (data: string[]) => {
    return data.map((title, index) => {
      return <Menu.Item key={index}>{title}</Menu.Item>
    })
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
                    {this.props.languageList.map((list) => {
                      return <Menu.Item key={list.code}>{list.name}</Menu.Item>
                    })}
                    <Menu.Item key="new">
                      {t("header.add_new_language")}
                    </Menu.Item>
                  </Menu>
                }
                icon={<GlobalOutlined />}
              >
                {this.props.language === "zh-TW" ? "中文" : "English"}
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
            {this.showNavigator(t("header.navigator", { returnObjects: true }))}
          </Menu>
        </div>
      </>
    )
  }
}
export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(withRouter(HeaderComponent)))
