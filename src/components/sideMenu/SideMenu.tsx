import React from "react"
import styles from "./SideMenu.module.css"
import { sideMenuList } from "./mockup"
import { Menu } from "antd"
import { GifOutlined } from "@ant-design/icons"

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles.sideMenu}>
      {sideMenuList.map((m, i) => {
        return (
          <Menu.SubMenu
            key={`side-menu-${i}`}
            title={
              <span>
                <GifOutlined />
                {m.title}
              </span>
            }>
            {m.subMenu.map((sm, smi) => {
              return (
                <Menu.SubMenu
                  key={`sub-menu-${smi}`}
                  title={
                    <span>
                      {" "}
                      <GifOutlined />
                      {sm.title}
                    </span>
                  }>
                  {sm.subMenu.map((thirdMenu, thirdI) => {
                    ;<Menu.Item key={`sub-sub-menu-${thirdI}`}>
                      <span>
                        <GifOutlined />
                        {thirdMenu}
                      </span>
                    </Menu.Item>
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
