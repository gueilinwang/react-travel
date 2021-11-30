import React from "react"
import { Divider } from "antd"
import { Filter } from "./Filter"
import styles from "./FilterArea.module.css"

export const FilterArea: React.FC = () => {
  return (
    <>
      <Filter title="路線評價" tags={["1星", "2星", "3星", "4星", "5星"]} />
      <Divider dashed className={styles["filter-divider"]} />
      <Filter title="出發城市" tags={["台北", "台中", "台南", "高雄"]} />
      <Divider dashed className={styles["filter-divider"]} />
      <Filter title="行程天數" tags={["2日", "3日", "4日", "5日", "6日"]} />
      <Divider dashed />
      <Filter
        title="旅程類型"
        tags={["團體", "自由行", "自駕遊", "客製化行程"]}
      />
      <Divider dashed />
      <Filter title="出發時間" tags={["春節", "清明節", "中秋節"]} />
    </>
  )
}
