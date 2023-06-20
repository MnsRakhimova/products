import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
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
  Wrapper,
  Sale,
  SaleReport,
  SaleReportWrapper,
  SaleReportSecond,
  AllLinkswrapper,
  Links,
};
