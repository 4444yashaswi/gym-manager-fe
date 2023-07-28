import React, { useEffect, useState } from "react";
import "./login.scss";
import Labels from "../../constants/Labels";
import { Row, Col } from "antd";
import UserLoginForm from "./UserLoginForm";
import GymLoginForm from "./GymLoginForm";
import CONSTANTS from "../../constants/constants";

const tanslate = undefined; // get the global selected language from cookies

const {
  [tanslate || "EN"]: {
    LOGIN_LABELS: {
      HEADER_TEXT,
      HEADER_SUB_TEXT,
      USER,
      GYM,
      LOGIN,
      FOOTER_TEXT,
      SIGNUP,
    },
  },
} = Labels;

const {
    PAGE_ROUTES: {
        SIGNUP: SIGNUP_ROUTE,
    },
} = CONSTANTS;

const Login = () => {
  const [activeTab, setActiveTab] = useState("user");

  const tabClickHandler = (event) => {
    const divObject = Object.keys(event.target).filter((divObject) =>
      divObject.includes("Props")
    )[0];
    setActiveTab(event.target[divObject].value);
    // console.log(event.target.__reactProps$nqvddr9ice.value);
  };

  useEffect(() => {
    console.log(Labels);
  }, []);

  return (
    <div className="page-container">
      <div className="login-contianer">
        <h1>{LOGIN}</h1>
        <p className="login-header--sub-text">{HEADER_SUB_TEXT}</p>
        <Row className="login-option">
          <Col span={6} className="login-option--text">
            {HEADER_TEXT}
          </Col>
          <Col
            span={9}
            className={`login-option--options ${
              activeTab === "user" ? "user-active" : ""
            }`}
            value="user"
            onClick={tabClickHandler}
          >
            {USER}
            {activeTab === "user" && <div className="login-option--cover" />}
          </Col>
          <Col
            span={9}
            className={`login-option--options ${
              activeTab === "gym" ? "gym-active" : ""
            }`}
            value="gym"
            onClick={tabClickHandler}
          >
            {GYM}
            {activeTab === "gym" && <div className="login-option--cover" />}
          </Col>
        </Row>
        <div className="login-form--container">
          {activeTab === "user" && <UserLoginForm />}
          {activeTab === "gym" && <GymLoginForm />}
        </div>
        <div className="login-signup--switch">
          {FOOTER_TEXT} <a href={SIGNUP_ROUTE} className="login-signup--btn">{SIGNUP}</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
