import React from "react";
// import Menu from "../Menu";
import Apple from "../../assets/image/apple.png";
import Strawberry from "../../assets/image/strawberry.png";
import GreenApple from "../../assets/image/GreenApple.png";
import Carrot from "../../assets/image/carrot.png";
import Apricot from "../../assets/image/apricot.png";
import Tomato from "../../assets/image/tomato.png";
import FilteringBar from "../FilterBar";
import WeightOfProduct from "../WeightOfProduct";
import { Route, Routes } from "react-router-dom";
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
  ProductImageWrapper,
  ProductsImage,
  ProductPrice,
  ProductName,
  ProductData,
} from "./style";
import { Dropdown } from "antd";
import ProductPage from "../Products";

// import { MenuUnfoldOutlined } from "@ant-design/icons";

function HomePage() {
  // function Icon(props) {
  //   return React.Children.only(props.children);
  // }
  const MenuItems = (
    <IconWrapper>
      <Sale>
        <SaleReportWrapper>
          <SaleReport>Продажи:{}₽</SaleReport>
          <SaleReportSecond blue>Наличные:{}₽</SaleReportSecond>
          <SaleReportSecond>Безнал:{}₽</SaleReportSecond>
        </SaleReportWrapper>
        <AllLinkswrapper>
          <Links to={"/products"}>Приход</Links>
          <Routes>
            <Route path="/products" element={<ProductPage />} />
          </Routes>
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
      <Product>
        <ProductData>
          <ProductImageWrapper
            onClick={() => window.location.replace(<WeightOfProduct />)}
          >
            <ProductPrice>100₽</ProductPrice>
            <ProductsImage src={Apple} alt="" />
          </ProductImageWrapper>
          <ProductName>Apple</ProductName>
        </ProductData>
        <ProductData>
          <ProductImageWrapper>
            <ProductPrice>{} ₽</ProductPrice>
            <ProductsImage src={Strawberry} alt="" />
          </ProductImageWrapper>
          <ProductName>{}Strawberry</ProductName>
        </ProductData>
        <ProductData>
          <ProductImageWrapper>
            <ProductPrice>{} ₽</ProductPrice>
            <ProductsImage src={GreenApple} alt="" />
          </ProductImageWrapper>
          <ProductName>{}Green Apple</ProductName>
        </ProductData>
        <ProductData>
          <ProductImageWrapper>
            <ProductPrice>{} ₽</ProductPrice>
            <ProductsImage src={Carrot} alt="" />
          </ProductImageWrapper>
          <ProductName>{}Carrot</ProductName>
        </ProductData>
        <ProductData>
          <ProductImageWrapper>
            <ProductPrice>{} ₽</ProductPrice>
            <ProductsImage src={Apricot} alt="" />
          </ProductImageWrapper>
          <ProductName>{}Apricot</ProductName>
        </ProductData>
        <ProductData>
          <ProductImageWrapper>
            <ProductPrice>{} ₽</ProductPrice>
            <ProductsImage src={Tomato} alt="" />
          </ProductImageWrapper>
          <ProductName>{}Tomato</ProductName>
        </ProductData>
      </Product>
      <FilteringBar />
      {/* <WeightOfProduct /> */}
      <CashRegister>
        <CashRegisterLittle>
          <TextWrapperInCashRegister>
            <TextInCashregister>Логин:</TextInCashregister>
            <TextInCashregister>Число:</TextInCashregister>
            <TextInCashregister>Время нач. сесс:</TextInCashregister>
          </TextWrapperInCashRegister>
        </CashRegisterLittle>
      </CashRegister>
      {/* <Sales /> */}
      {/* <WeightOfProduct /> */}
    </Wrapper>
  );
}

export default HomePage;
