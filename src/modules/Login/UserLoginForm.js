import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import Labels from "../../constants/Labels";
import {
  MailOutlined,
  LockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const translate = undefined; // get the global selected language from cookies
const {
  [translate || "EN"]: {
    LOGIN_LABELS: {
      USER_NAME,
      ENTER_USER_NAME,
      PASSWORD,
      ENTER_PASSWORD,
      REMEMBER_ME,
      LOGIN,
      FORGOT_PASSWORD,
    },
  },
} = Labels;

const UserLoginForm = () => {
  const [formData] = Form.useForm();

  const formSubmitHandler = () => {
    console.log(formData);
  };

  const rememberMeHandler = (event) => {
    console.log(event.target.checked);
  };

  return (
    <Form
      form={formData}
      onFinish={formSubmitHandler}
      requiredMark={false}
      className="form--common"
    >
      <Form.Item
        name="userName"
        label={"" /*<p className="input-label">{USER_NAME}</p>*/}
        rules={[{ required: true, message: ENTER_USER_NAME }]}
      >
        <Input
          placeholder={USER_NAME}
          className="input-field"
          prefix={<MailOutlined />}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label={"" /*<p className="input-label">{PASSWORD}</p>*/}
        rules={[{ required: true, message: ENTER_PASSWORD }]}
      >
        <Input.Password
          placeholder={PASSWORD}
          className="input-field"
          prefix={<LockOutlined />}
        />
      </Form.Item>
      <div className="form-utils">
        <Checkbox onChange={rememberMeHandler}>{REMEMBER_ME}</Checkbox>
        <span className="form-utils--forgot-password">{FORGOT_PASSWORD}</span>
      </div>
      <div className="btn--container">
        <Button type="primary">
          {LOGIN}
          <ArrowRightOutlined />
        </Button>
      </div>
    </Form>
  );
};

export default UserLoginForm;
