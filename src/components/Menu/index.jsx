import React from "react";
import {
  Wrapper,
  Sale,
  SaleReport,
  SaleReportWrapper,
  SaleReportSecond,
  AllLinkswrapper,
  // LinkWrapper,
  Links,
} from "./style";
import Sales from "../Sales";
import { Routes, Route } from "react-router-dom";

function Menu() {
  return (
    <Wrapper>
      <Sale>
        <SaleReportWrapper>
          <SaleReport>Продажи:{}₽</SaleReport>
          <SaleReportSecond blue>Наличные:{}₽</SaleReportSecond>
          <SaleReportSecond>Безнал:{}₽</SaleReportSecond>
        </SaleReportWrapper>
        <AllLinkswrapper>
          <Links to={"/Sales"}>Приход</Links>
          <Routes>
            <Route path="/Sales" component={<Sales />} />
          </Routes>
          <Links>История Продажи</Links>
          <Links>Отход</Links>
          <Links>Заказ</Links>
          <Links>Выход</Links>
        </AllLinkswrapper>
      </Sale>
    </Wrapper>
  );
}

export default Menu;
