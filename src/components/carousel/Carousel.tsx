import React from "react"
import styles from "./Carousel.module.css"
import { Image, Carousel as AntCarousel } from "antd"
import carousel_1 from "@images/carousel_1.jpg"
import carousel_2 from "@images/carousel_2.jpg"
import carousel_3 from "@images/carousel_3.jpg"
export const Carousel: React.FC = () => {
  return (
    <AntCarousel autoplay className={styles.slider}>
      <Image src={carousel_1} />
      <Image src={carousel_2} />
      <Image src={carousel_3} />
    </AntCarousel>
  )
}
