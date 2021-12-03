import React, { useEffect } from "react"
import { RouteComponentProps } from "react-router-dom"
import {
  Spin,
  Typography,
  Row,
  Col,
  DatePicker,
  Divider,
  Anchor,
  Menu,
} from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { MainLayout } from "../../layouts/mainLayout"
import { ProductIntro, ProductComments } from "../../components"
import styles from "./DetailPage.module.css"
import locale from "antd/es/date-picker/locale/zh_TW"
import { commentMockData } from "./mockup"
import { getProductDetail } from "../../redux/productDetail/slice"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
interface IMatchParams {
  touristRouteId: string
}
export const DetailPage: React.FC<RouteComponentProps<IMatchParams>> = (
  props
) => {
  const { touristRouteId } = props.match.params //從props.match.params獲得參數
  const isLoading = useAppSelector((state) => state.productDetail.isLoading)
  const error = useAppSelector((state) => state.productDetail.error)
  const product = useAppSelector((state) => state.productDetail.data)
  const loadingIcon = <LoadingOutlined style={{ fontSize: "50px" }} />
  const { RangePicker } = DatePicker
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProductDetail(touristRouteId))
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
      <MainLayout>
        {/* 產品簡介與日期選擇區塊 */}
        <div className={styles["product-intro-container"]}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product.title}
                shortDescription={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
                pictures={product.touristRoutePictures.map((p) => p.url)}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{ marginTop: 20 }} locale={locale} />
            </Col>
          </Row>
        </div>
        {/* 錨點菜單 */}
        <Anchor className={styles["product-detail-anchor"]}>
          <Menu mode="horizontal" style={{ justifyContent: "center" }}>
            <Menu.Item key="1">
              <Anchor.Link href="#features" title="產品特色"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Anchor.Link href="#fees" title="費用"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Anchor.Link href="#notes" title="預定須知"></Anchor.Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Anchor.Link href="#comments" title="用戶評價"></Anchor.Link>
            </Menu.Item>
          </Menu>
        </Anchor>
        {/* 產品特色 */}
        <div id="features" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>產品特色</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.features }}
            style={{ margin: 50 }}></div>
        </div>
        {/* 費用 */}
        <div id="fees" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>費用</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.fees }}
            style={{ margin: 50 }}></div>
        </div>
        {/* 預定須知 */}
        <div id="notes" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>預定須知</Typography.Title>
          </Divider>
          <div
            dangerouslySetInnerHTML={{ __html: product.notes }}
            style={{ margin: 50 }}></div>
        </div>
        {/* 用戶評價 */}
        <div id="comments" className={styles["product-detail-container"]}>
          <Divider orientation={"center"}>
            <Typography.Title level={3}>用戶評價</Typography.Title>
          </Divider>
          <div style={{ margin: 40 }}>
            <ProductComments data={commentMockData} />
          </div>
        </div>
      </MainLayout>
    </>
  )
}
