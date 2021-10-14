import React from "react"
import styles from "./ProductCollection.module.css"
import { Row, Col, Divider } from "antd"
import ProductImage from "./ProductImage"
interface IProductCollectionProps {
  title: JSX.Element
  sideImage: string
  products: any
}
export const ProductCollection: React.FC<IProductCollectionProps> = ({
  title,
  sideImage,
  products,
}) => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">{title}</Divider>
      <Row>
        <Col span={4}>
          <img src={sideImage} alt="img1" className={styles["side-image"]} />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductImage
                size="large"
                title={products[0].title}
                imageSrc={products[0].touristRoutePictures[0].url}
                price={products[0].price}
                id={products[0].id}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductImage
                    size="small"
                    title={products[1].title}
                    imageSrc={products[1].touristRoutePictures[0].url}
                    price={products[1].price}
                    id={products[1].id}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    size="small"
                    title={products[2].title}
                    imageSrc={products[2].touristRoutePictures[0].url}
                    price={products[2].price}
                    id={products[2].id}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ProductImage
                    size="small"
                    title={products[3].title}
                    imageSrc={products[3].touristRoutePictures[0].url}
                    price={products[3].price}
                    id={products[3].id}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    size="small"
                    title={products[4].title}
                    imageSrc={products[4].touristRoutePictures[0].url}
                    price={products[4].price}
                    id={products[4].id}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductImage
                size="small"
                title={products[5].title}
                imageSrc={products[5].touristRoutePictures[0].url}
                price={products[5].price}
                id={products[5].id}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                size="small"
                title={products[6].title}
                imageSrc={products[6].touristRoutePictures[0].url}
                price={products[6].price}
                id={products[6].id}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                size="small"
                title={products[7].title}
                imageSrc={products[7].touristRoutePictures[0].url}
                price={products[7].price}
                id={products[7].id}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                size="small"
                title={products[8].title}
                imageSrc={products[8].touristRoutePictures[0].url}
                price={products[8].price}
                id={products[8].id}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
