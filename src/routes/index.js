import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../modules/Login/Login";
import Signup from "../modules/Login/Signup";
import GymLanding from "../modules/Home/GymLanding";
import CONSTANTS from "../constants/constants";

const {
  PAGE_ROUTES: { LOGIN, SIGNUP, GYM_HOME },
} = CONSTANTS;

const Index = () => {
  return (
    <Routes>
      <Route exact path={LOGIN} element={<Login />} />
      <Route exact path={GYM_HOME} element={<GymLanding />} />
      <Route exact path={SIGNUP} element={<Signup />} />
    </Routes>
  );
};

export default Index;
