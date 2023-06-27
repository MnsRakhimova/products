import { styled } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 40%;
  border: 1px solid #02701a;
  background: #e5f1f0;
`;

const ChangeText = styled.h1`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 40px;
`;

const ChangeInput = styled.input`
  width: 7vw;
  height: 10vh;
  background: #fffdfd;
  font-size: 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export { Wrapper, ChangeText, ChangeInput };
