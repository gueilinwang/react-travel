import React, { useState, useEffect } from "react"
import styles from "./Header.module.css"
import logo from "../../assets/logo.svg"
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd"
import { GlobalOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {
  changeLanguageActionCreator,
  addLanguageActionCreator,
} from "../../redux/language/languageActions"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import jwtDecode, { JwtPayload as DefaultJwtPatload } from "jwt-decode"
import { userSlice } from "../../redux/user/slice"
interface JwtPayload extends DefaultJwtPatload {
  username: string
}

export const Header: React.FC<{}> = () => {
  const history = useHistory()
  const { t } = useTranslation()
  const language = useAppSelector((state) => state.language.language)
  const languageList = useAppSelector((state) => state.language.languageList)
  const jwt = useAppSelector((state) => state.user.token)
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState("")

  useEffect(() => {
    if (jwt) {
      const token = jwtDecode<JwtPayload>(jwt)
      setUsername(token.username)
    }
  }, [jwt])

  const menuClickHandler = (e) => {
    if (e.key === "new") {
      //處理新語言action
      dispatch(addLanguageActionCreator("新語言", "new"))
    } else {
      //處理切換語言action
      dispatch(changeLanguageActionCreator(e.key))
    }
  }

  const showNavigator = (data: string[]) => {
    return data.map((title, index) => {
      return <Menu.Item key={index}>{title}</Menu.Item>
    })
  }
  const onLogout = () => {
    dispatch(userSlice.actions.logOut())
    history.push("/")
  }
  return (
    <>
      <div className={styles["app-header"]}>
        <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <Typography.Text>{t("header.slogan")}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={menuClickHandler}>
                  {languageList.map((list) => {
                    return <Menu.Item key={list.code}>{list.name}</Menu.Item>
                  })}
                  <Menu.Item key="new">
                    {t("header.add_new_language")}
                  </Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}>
              {language === "zh-TW" ? "中文" : "English"}
            </Dropdown.Button>
            {jwt ? (
              <Button.Group className={styles["button-group"]}>
                <span>
                  {t("header.welcome")}
                  <Typography.Text strong>{username}</Typography.Text>
                  <Button onClick={() => history.push("/shoppingCart")}>
                    {t("header.shoppingCart")}
                  </Button>
                  <Button onClick={onLogout}>{t("header.signOut")}</Button>
                </span>
              </Button.Group>
            ) : (
              <Button.Group className={styles["button-group"]}>
                <Button onClick={() => history.push("/register")}>
                  {t("header.register")}
                </Button>
                <Button onClick={() => history.push("/signin")}>
                  {t("header.signin")}
                </Button>
              </Button.Group>
            )}
          </div>
        </div>
        <Layout.Header className={styles["main-header"]}>
          <span style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
            <img src={logo} alt="logo" className={styles["App-logo"]} />
            <Typography.Title className={styles.title} level={3}>
              {t("header.title")}
            </Typography.Title>
          </span>

          <Input.Search
            placeholder={t("header.search_placeholder")}
            className={styles["search-input"]}
            onSearch={(keywords) => history.push("/search/" + keywords)}
          />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles["main-menu"]}>
          {showNavigator(t("header.navigator", { returnObjects: true }))}
        </Menu>
      </div>
    </>
  )
}
