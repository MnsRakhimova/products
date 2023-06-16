import { styled } from "styled-components";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MenuBar = styled.div`
  position: fixed;
  width: 51px;
  height: 100vh;
  background-color: #d9d9d9;
`;

const CashRegister = styled.div`
  position: fixed;
  right: 0;
  width: 181px;
  height: 100vh;
  background-color: #e5f1f0;
`;

const CashRegisterLittle = styled.div`
  position: absolute;
  top: 3px;
  left: 9px;
  width: 135px;
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
  left: 71px;
  top: 35px;
`;

const IconWrapper = styled.div`
  font-family: "Rubik", sans-serif;
  position: fixed;
  top: 13px;
  left: 4px;
  width: 199px;
  height: 306px;
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
  font-size: 17px;
`;

const SaleReportSecond = styled.h1`
  padding-top: 2px;
  font-family: "Rubik", sans-serif;
  font-size: 13px;
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
  margin: 4px;
  font-size: 17px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  background-color: aliceblue;
`;

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
};
