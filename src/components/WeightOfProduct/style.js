import { styled } from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  position: fixed;
  top: 10%;
  width: 276px;
  height: 211px;
  background-color: #d9d9d9;
  border: 2px solid #111;
  left: 40%;
`;

const ProductWrapper = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 130px;
`;

const ProductName = styled.h1`
  font-weight: 700;
  font-size: 24px;
  padding-bottom: 9px;
  padding-top: 6px;
`;

const ProductWeight = styled.div`
  position: relative;
  top: 10px;
  left: 93.14px;
`;

const LeftIcon = styled(LeftOutlined)`
  position: absolute;
  right: 272px;
  top: 14px;
  width: 7.69px;
`;

const RigthIcon = styled(RightOutlined)`
  position: absolute;
  left: 80px;
  top: 14px;
  width: 7.69px;
`;

const Weight = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 50px;
  left: 10px;
  font-weight: 700;
  font-size: 24px;
  background-color: #ffff;
  /* overflow: hidden; */
`;

export {
  Wrapper,
  LeftIcon,
  Img,
  ProductName,
  ProductWeight,
  ProductWrapper,
  RigthIcon,
  Weight,
};
