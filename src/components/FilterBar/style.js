import { styled } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 3px;
  width: 100vw;
  height: 50px;
  background-color: #d9d9d9;
  padding-left: 23px;
  position: fixed;
  left: 51px;
`;

const Filtering = styled.div`
  cursor: pointer;
  width: 50.18px;
  height: 30.55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #69b7ff;
  margin-top: 4px;
  font-family: "Rubik", sans-serif;
  font-weight: 700;
  font-size: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  height: 35px;
  margin-left: 33px;
  padding: 8px, 16px, 8px, 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Input = styled.input`
  background: rgba(0, 0, 0, 0.04);
  border: 2px solid #000000;
  border-radius: 8px;
  font-weight: 500;
  font-size: 17px;
  padding-left: 48px;
  width: 366px;
`;

const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  left: 17.98px;
  color: #898989;
`;

export { FilterBar, Filtering, Input, InputWrapper, SearchIcon };
