import React, { useEffect } from "react"
import styles from "./SignInForm.module.css"
import { Form, Input, Button, Checkbox } from "antd"
import { signIn } from "../../redux/user/slice"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { useHistory } from "react-router-dom"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export const SignInForm: React.FC = () => {
  const isloading = useAppSelector((state) => state.user.isLoading)
  const jwt = useAppSelector((state) => state.user.token)
  const error = useAppSelector((state) => state.user.error)
  const dispatch = useAppDispatch()
  const history = useHistory()

  //依據API回應判斷jwt的值是否為null
  useEffect(() => {
    if (jwt !== null) {
      history.push("/")
    }
  }, [jwt])

  const onFinish = (values: any) => {
    console.log("Success:", values)
    dispatch(signIn({ email: values.username, password: values.password }))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={styles["signIn-form"]}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={isloading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
