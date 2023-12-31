import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  top: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 115px;
`;

const Entry = styled.h1`
  /* position: absolute; */
  font-style: normal;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  font-family: "Rubik", sans-serif;
`;

const LogoImage = styled.img`
  width: 10%;
  /* height: 81px;   */
  /* position: absolute;
  top: 22px;
  width: 10%; */
`;

const Maga = styled.h1`
  position: absolute;
  font-size: 12px;
  font-family: "Marck Script", cursive;
  right: 2%;
  bottom: 0;
`;

const Login = styled.input`
  /* position: absolute; */
  /* top: 129px; */
  /* left: 42.3%;
  top: 53%; */
  margin: 10px 0 0 0;
  width: 14%;
`;

const Password = styled.input`
  /* position: absolute;
  width: 17%;
  top: 155px; */
  margin: 10px 0;
  width: 14%;
`;

const Btn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute;
  top: 190px; */
  width: 126px;
  height: 44px;
  text-decoration: none;

  /* background: conic-gradient(#bf8130, #bfb830); */
  background: linear-gradient(to left, #bf8130, #bfb830);
  background-color: #bf8130;
  /* background: #2678f3; */
  border-radius: 8px;
  border: 2px solid #ffff;
  color: #ffff;
  :hover {
    background-color: #ffff;
    border: 2px solid #2678f3;
    color: #2678f3;
  }
`;
export { Entry, Wrapper, LogoImage, Maga, Login, Password, Btn };
