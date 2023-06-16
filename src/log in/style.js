import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Entry = styled.h1`
  position: absolute;
  top: 13%;
  left: 45%;
  font-style: normal;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  font-family: "Rubik", sans-serif;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 23%;
  left: 44%;
  width: 13%;
`;

const Maga = styled.h1`
  position: absolute;
  font-size: 12px;
  font-family: "Marck Script", cursive;
  right: 4%;
`;

const Login = styled.input`
  position: absolute;
  left: 42.3%;
  top: 53%;
  width: 17%;
`;

const Password = styled.input`
  position: absolute;
  left: 42.3%;
  top: 59%;
  width: 17%;
`;

const Btn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 65%;
  left: 45%;
  width: 126px;
  height: 44px;
  text-decoration: none;

  background: #2678f3;
  border-radius: 8px;
  border: #ffff;
  color: #ffff;

  :hover {
    border: #2678f3;
    background-color: #ffff;
    color: #2678f3;
  }
`;
export { Entry, Wrapper, LogoImage, Maga, Login, Password, Btn };
