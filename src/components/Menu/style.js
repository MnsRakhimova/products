import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  display: flex;
  /* width: 100%;
  height: 100%; */
`;

const IconWrapper = styled.div`
  font-family: "Rubik", sans-serif;
  position: fixed;
  /* top: 13px;
  left: 4px; */
  width: 199px;
  height: 350px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  background-color: #ffffff;
  /* z-index: 3; */
  padding-left: 12px;
`;
const Sale = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 191px;
  height: 70px;
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

const MenuBar = styled.div`
  width: 51px;
  height: 100vh;
  background-color: #d9d9d9;
  flex-grow: 0.001;
`;

const MenuIcon = styled(MenuUnfoldOutlined)`
  position: absolute;
  left: 14px;
  top: 14px;
  cursor: pointer;
`;

export {
  Wrapper,
  IconWrapper,
  Sale,
  SaleReport,
  SaleReportWrapper,
  SaleReportSecond,
  AllLinkswrapper,
  Links,
  MenuBar,
  MenuIcon,
};
