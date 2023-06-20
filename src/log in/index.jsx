import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Entry, LogoImage, Maga, Login, Password, Btn, Wrapper } from "./style";
// import HomePage from "../HomePage";

const LogIn = () => {
  return (
    <>
      <Maga>Мага v.1.0.0 2023</Maga>
      <Wrapper>
        <Entry>Вход в систему</Entry>
        <LogoImage src={require("../assets/image/image.png")} />
        <Login placeholder="Login" />
        <Password placeholder="Password" type="password" />
        <Btn to={"/Entry"}>Вход</Btn>
      </Wrapper>
    </>
  );
};

export default LogIn;
