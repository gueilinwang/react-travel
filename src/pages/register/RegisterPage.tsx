import React from "react"
import { UserLayout } from "../../layouts/userLayout"
// import styles from "./RegisterPage.module.css"
import { RegisterForm } from "../../components"
export const RegisterPage: React.FC = () => {
  return (
    <>
      <UserLayout>
        <h1>註冊</h1>
        <RegisterForm />
      </UserLayout>
    </>
  )
}
