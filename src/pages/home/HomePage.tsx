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
import { withTranslation, WithTranslation } from "react-i18next"
import { productList1, productList2, productList3 } from "./mockup"
import sideImage1 from "../../assets/images/sider_img1.png"
import sideImage2 from "../../assets/images/sider_img2.png"
import sideImage3 from "../../assets/images/sider_img3.png"
import styles from "./HomePage.module.css"
class HomePageComponent extends React.Component<WithTranslation> {
  render() {
    const { t } = this.props
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
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImage1}
            products={productList1}
          ></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          ></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          ></ProductCollection>
          <Cooperator title={t("home_page.joint_venture")} />
        </div>
        <Footer />
      </>
    )
  }
}

export const HomePage = withTranslation()(HomePageComponent)
