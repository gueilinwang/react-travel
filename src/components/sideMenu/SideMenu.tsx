import React from "react"
import styles from "./SideMenu.module.css"
import { sideMenuList } from "./mockup"
import { Menu } from "antd"
import { FireOutlined } from "@ant-design/icons"

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles.sideMenu}>
      {sideMenuList.map((m, i) => {
        return (
          <Menu.SubMenu
            key={`side-menu-${i}`}
            title={
              <span>
                <FireOutlined />
                {m.title}
              </span>
            }>
            {m.subMenu.map((sm, smi) => {
              return (
                <Menu.SubMenu
                  key={`sub-menu-${smi}`}
                  title={
                    <span>
                      <FireOutlined />
                      {sm.title}
                    </span>
                  }>
                  {sm.subMenu.map((thirdMenu, thirdI) => {
                   return (<Menu.Item key={`sub-sub-menu-${thirdI}`}>
                      <span>
                        <FireOutlined />
                        {thirdMenu}
                      </span>
                    </Menu.Item>)
                  })}
                </Menu.SubMenu>
              )
            })}
          </Menu.SubMenu>
        )
      })}
    </Menu>
  )
}
