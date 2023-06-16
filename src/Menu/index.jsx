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
          <Links>Приход</Links>
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
