import React from "react"
import { UserLayout } from "../../layouts/userLayout"
// import styles from "./SignInPage.module.css"
export const SignInPage: React.FC = (props) => {
  console.log("props", props)
  return (
    <>
      <UserLayout>
        <h1>登錄頁面</h1>
      </UserLayout>
    </>
  )
}
