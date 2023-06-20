import { styled } from "styled-components";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MenuBar = styled.div`
  /* position: fixed; */
  width: 51px;
  height: 100vh;
  background-color: #d9d9d9;
  flex-grow: 0.03;
`;

const CashRegister = styled.div`
  display: flex;
  /* position: fixed; */
  right: 0;
  width: 181px;
  height: 100vh;
  background-color: #e5f1f0;
  flex-grow: 0.03;
  z-index: 2;
`;

const CashRegisterLittle = styled.div`
  position: absolute;
  top: 3px;
  right: 9px;
  width: 160px;
  height: 65px;
  background-color: #e1ffdf;
  border: 1px solid #000000;
`;

const TextWrapperInCashRegister = styled.div`
  position: absolute;
  top: 2px;
  left: 9px;
  font-family: "Rubik", sans-serif;
`;
const TextInCashregister = styled.h1`
  font-size: 10px;
  padding-top: 5px;
`;

const MenuIcon = styled(MenuUnfoldOutlined)`
  position: absolute;
  left: 14px;
  top: 14px;
  cursor: pointer;
`;

const Product = styled.div`
  position: relative;
  display: flex;
  gap: 7px;
  flex-direction: row;
  flex-wrap: wrap;
  left: 7px;
  right: 7px;
  top: 35px;
  flex-grow: 6;
`;

const IconWrapper = styled.div`
  font-family: "Rubik", sans-serif;
  position: fixed;
  top: 13px;
  left: 4px;
  width: 199px;
  height: 330px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  background-color: #ffffff;
  z-index: 3;
  padding-left: 12px;
`;
const Sale = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 191px;
  height: 58px;
  background-color: #deffdc;
  border-radius: 8px;
  border: 2px solid #000000;
`;
const SaleReportWrapper = styled.div`
  margin-left: 12px;
`;

const SaleReport = styled.h1`
  font-size: 13px;
`;

const SaleReportSecond = styled.h1`
  font-family: "Rubik", sans-serif;
  font-size: 11px;
  color: ${({ blue }) => (blue ? "#3423BB" : "#04AB0B")};
`;

const AllLinkswrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 29px;
`;

const LinkWrapper = styled.div``;

const Links = styled(Link)`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 191px;
  height: 40px;
  margin: 4px 0;
  font-size: 17px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  background-color: aliceblue;
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 99px;
  height: 59px;
  border: 1px solid #4a909a;
  border-radius: 8px;
`;

const ProductsImage = styled.img`
  width: 100%;
`;

const ProductPrice = styled.h1`
  position: absolute;
  font-weight: 800;
  font-size: 10px;
  color: #057a1f;
  top: 2px;
  left: 2px;
`;

const ProductName = styled.h1`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #274303;
`;

const ProductData = styled.div``;

export {
  IconWrapper,
  Sale,
  SaleReport,
  SaleReportWrapper,
  SaleReportSecond,
  AllLinkswrapper,
  LinkWrapper,
  Links,
  MenuBar,
  Wrapper,
  CashRegister,
  CashRegisterLittle,
  TextInCashregister,
  TextWrapperInCashRegister,
  Product,
  MenuIcon,
  ProductImageWrapper,
  ProductsImage,
  ProductPrice,
  ProductName,
  ProductData,
};
