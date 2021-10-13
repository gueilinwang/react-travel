import React from "react"
import { Layout, Typography } from "antd"
export const Footer: React.FC = () => {
  return (
    <>
      <Layout.Footer>
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          版權所有 @ React旅遊網
        </Typography.Title>
      </Layout.Footer>
    </>
  )
}
