import React, { useEffect } from "react"
import { MainLayout } from "src/layouts/mainLayout"
import { Header, Footer, FilterArea, ProductList } from "../../components"
import styles from "./SearchPage.module.css"
import { useParams, useLocation } from "react-router"
import { Spin } from "antd"
import { getProductSearch } from "../../redux/productSearch/slice"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { LoadingOutlined } from "@ant-design/icons"
interface IMatchParams {
  keywords: string
}
export const SearchPage: React.FC<{}> = () => {
  const { keywords } = useParams<IMatchParams>()
  const isLoading = useAppSelector((state) => state.productSearch.isLoading)
  const error = useAppSelector((state) => state.productSearch.error)
  const paginayion = useAppSelector((state) => state.productSearch.pagination)
  const productList = useAppSelector((state) => state.productSearch.data)
  const dispatch = useAppDispatch()
  const location = useLocation()
  const loadingIcon = <LoadingOutlined style={{ fontSize: "50px" }} />
  useEffect(() => {
    dispatch(getProductSearch({ nextPage: 1, pageSize: 10, keyword: keywords }))
  }, [location])

  const onPageChange = (nextPage, pageSize) => {
    dispatch(getProductSearch({ nextPage, pageSize, keyword: keywords }))
  }
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
        {/* 產品篩選器 */}
        <div className={styles["product-list-container"]}>
          <FilterArea />
        </div>
        {/* 產品列表 */}
        <div className={styles["product-list-container"]}>
          <ProductList
            data={productList}
            paging={paginayion}
            onPageChange={onPageChange}
          />
        </div>
      </MainLayout>
    </>
  )
}
