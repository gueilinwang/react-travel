import React from "react"
import { Divider, Typography, Row, Col } from "antd"
import microsoft from "@images/microsoft.png"
import facebook from "@images/facebook.png"
import instagram from "@images/instagram.png"
import youtube from "@images/youtube.png"
import styles from "./Cooperator.module.css"
interface ICooperatorProps {
  title: string
}
const imageArray = [
  { src: microsoft, alt: "microsoft" },
  { src: facebook, alt: "facebook" },
  { src: instagram, alt: "instagram" },
  { src: youtube, alt: "youtube" },
]
export const Cooperator: React.FC<ICooperatorProps> = ({ title }) => {
  return (
    <div>
      <Divider orientation="left">
        <Typography.Title type="secondary" level={3}>
          {title}
        </Typography.Title>
      </Divider>
      <Row>
        {imageArray &&
          imageArray.length > 0 &&
          imageArray.map((obj) => {
            return (
              <Col span={6} className={styles["layout-center"]} key={obj.alt}>
                <img src={obj.src} className={styles.corImage} alt={obj.alt} />
              </Col>
            )
          })}
      </Row>
    </div>
  )
}
