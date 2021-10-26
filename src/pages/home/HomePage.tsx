import React from "react"
import {
  Header,
  Footer,
  Carousel,
  SideMenu,
  ProductCollection,
  Cooperator,
} from "../../components"
import { Row, Col, Typography, Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { useTranslation } from "react-i18next"
import sideImage1 from "../../assets/images/sider_img1.png"
import sideImage2 from "../../assets/images/sider_img2.png"
import sideImage3 from "../../assets/images/sider_img3.png"
import styles from "./HomePage.module.css"
import axios from "axios"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import {
  fetchRecommendProductsStartActionCreator,
  fetchRecommendProductsSuccessActionCreator,
  fetchRecommendProductsFailActionCreator,
} from "../../redux/recommendProducts/recommendProductsAction"
export const HomePage: React.FC = () => {
  const { t } = useTranslation()
  const isLoading = useAppSelector((state) => state.recommendProducts.isLoading)
  const error = useAppSelector((state) => state.recommendProducts.error)
  const productLists = useAppSelector(
    (state) => state.recommendProducts.productLists
  )
  const loadingIcon = <LoadingOutlined style={{ fontSize: "50px" }} />
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(fetchRecommendProductsStartActionCreator())
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://123.56.149.216:8080/api/productCollections"
        )
        dispatch(fetchRecommendProductsSuccessActionCreator(data))
      } catch (error) {
        if (error instanceof Error) {
          dispatch(fetchRecommendProductsFailActionCreator(error.message))
        }
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <Spin
        indicator={loadingIcon}
        style={{ position: "absolute", left: "50%", top: "50%" }}
      />
    )
  }
  if (error) {
    return <div style={{ textAlign: "center" }}>發生錯誤:{error}</div>
  }

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
          products={productLists[0].touristRoutes}></ProductCollection>
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {t("home_page.new_arrival")}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productLists[1].touristRoutes}></ProductCollection>
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {t("home_page.domestic_travel")}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productLists[2].touristRoutes}></ProductCollection>
        <Cooperator title={t("home_page.joint_venture")} />
      </div>
      <Footer />
    </>
  )
}
