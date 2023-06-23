import React from "react";
import {
  Wrapper,
  IconWrapper,
  Sale,
  SaleReport,
  SaleReportWrapper,
  SaleReportSecond,
  AllLinkswrapper,
  // LinkWrapper,
  Links,
  MenuBar,
  MenuIcon,
} from "./style";
import { Dropdown } from "antd";
// import { Routes, Route } from "react-router-dom";

function Menu() {
  const MenuItems = (
    <IconWrapper>
      <Sale>
        <SaleReportWrapper>
          <SaleReport>Продажи:{}₽</SaleReport>
          <SaleReportSecond blue>Наличные:{}₽</SaleReportSecond>
          <SaleReportSecond>Безнал:{}₽</SaleReportSecond>
        </SaleReportWrapper>
        <AllLinkswrapper>
          <Links to={"/"}>Приход</Links>
          <Links to={"/"}>История Продажи</Links>
          <Links to={"/"}>Отход</Links>
          <Links to={"/"}>Заказ</Links>
          <Links to={"/"}>Выход</Links>
        </AllLinkswrapper>
      </Sale>
    </IconWrapper>
  );
  return (
    <Wrapper>
      <MenuBar>
        <Dropdown
          overlay={MenuItems}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          trigger="click"
        >
          <MenuIcon />
        </Dropdown>
      </MenuBar>
    </Wrapper>
  );
}

export default Menu;
