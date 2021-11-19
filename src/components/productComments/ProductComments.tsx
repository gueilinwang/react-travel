import React from "react"
import { Comment, Tooltip, List } from "antd"
import styles from "./ProductComments.module.css"

interface IProductCommentsProps {
  data: {
    author: string
    avatar: string
    content: string
    createDate: string
  }[]
}
export const ProductComments: React.FC<IProductCommentsProps> = ({ data }) => {
  return (
    <>
      <List
        dataSource={data}
        itemLayout="horizontal"
        renderItem={(item) => {
          return (
            <li>
              <Comment
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.createDate}
              />
            </li>
          )
        }}></List>
    </>
  )
}
