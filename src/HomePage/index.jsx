import React from "react";
// import Menu from "../Menu";
import Apple from "../assets/image/apple.png";
import Strawberry from "../assets/image/strawberry.png";
import GreenApple from "../assets/image/GreenApple.png";
import Carrot from "../assets/image/carrot.png";
import Apricot from "../assets/image/apricot.png";
import Tomato from "../assets/image/tomato.png";
import FilteringBar from "../FilterBar";

import {
  Wrapper,
  MenuBar,
  CashRegister,
  CashRegisterLittle,
  TextInCashregister,
  TextWrapperInCashRegister,
  Product,
  IconWrapper,
  Sale,
  SaleReport,
  SaleReportSecond,
  SaleReportWrapper,
  AllLinkswrapper,
  Links,
  MenuIcon,
} from "./style";
// import { Link, Route, Routes } from "react-router-dom";
import { Dropdown, Space } from "antd";
// import { MenuUnfoldOutlined } from "@ant-design/icons";

function HomePage() {
  function Icon(props) {
    return React.Children.only(props.children);
  }
  const MenuItems = (
    <IconWrapper>
      <Sale>
        <SaleReportWrapper>
          <SaleReport>Продажи:{}₽</SaleReport>
          <SaleReportSecond blue>Наличные:{}₽</SaleReportSecond>
          <SaleReportSecond>Безнал:{}₽</SaleReportSecond>
        </SaleReportWrapper>
        <AllLinkswrapper>
          <Links>Приход</Links>
          <Links>История Продажи</Links>
          <Links>Отход</Links>
          <Links>Заказ</Links>
          <Links>Выход</Links>
        </AllLinkswrapper>
      </Sale>
    </IconWrapper>
  );
  return (
    <Wrapper>
      <MenuBar>
        <Dropdown menu={{ MenuItems }}>
          <Icon>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <MenuIcon />
              </Space>
            </a>
          </Icon>
        </Dropdown>
      </MenuBar>

      <Product>
        <img src={Apple} alt="" />
        <img src={Strawberry} alt="" />
        <img src={GreenApple} alt="" />
        <img src={Carrot} alt="" />
        <img src={Apricot} alt="" />
        <img src={Tomato} alt="" />
      </Product>
      <FilteringBar />
      <CashRegister>
        <CashRegisterLittle>
          <TextWrapperInCashRegister>
            <TextInCashregister>Логин:</TextInCashregister>
            <TextInCashregister>Число:</TextInCashregister>
            <TextInCashregister>Время нач. сесс:</TextInCashregister>
          </TextWrapperInCashRegister>
        </CashRegisterLittle>
      </CashRegister>
    </Wrapper>
  );
}

export default HomePage;
