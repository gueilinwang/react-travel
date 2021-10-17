import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
export const Header: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <div className={styles['app-header']}>
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text>讓旅遊更幸福</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu>
                  <Menu.Item>中文</Menu.Item>
                  <Menu.Item>English</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              語言
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push('register')}>註冊</Button>
              <Button onClick={() => history.push('signin')}>登入</Button>
            </Button.Group>
          </div>
        </div>
        <Layout.Header className={styles['main-header']}>
          <span style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
            <img src={logo} alt="logo" className={styles['App-logo']} />
            <Typography.Title className={styles.title} level={3}>
              React 旅遊網
            </Typography.Title>
          </span>

          <Input.Search
            placeholder="請輸入旅遊目的地、主題或關鍵字"
            className={styles['search-input']}
          ></Input.Search>
        </Layout.Header>
        <Menu mode={'horizontal'} className={styles['main-menu']}>
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
