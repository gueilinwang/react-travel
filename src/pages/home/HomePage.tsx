import React from "react"
import {
  Header,
  Footer,
  Carousel,
  SideMenu,
  ProductCollection,
  Cooperator,
} from "../../components"
import { Row, Col, Typography } from "antd"
import { productList1, productList2, productList3 } from "./mockup"
import sideImage1 from "../../assets/images/sider_img1.png"
import sideImage2 from "../../assets/images/sider_img2.png"
import sideImage3 from "../../assets/images/sider_img3.png"
import styles from "./HomePage.module.css"
export class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/**頁面內容 */}
        <div className={styles["page-contnet"]}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                爆款推薦
              </Typography.Title>
            }
            sideImage={sideImage1}
            products={productList1}></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                新品上市
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                國內遊推薦
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}></ProductCollection>
          <Cooperator title="企業合作" />
        </div>
        <Footer />
      </>
    )
  }
}
