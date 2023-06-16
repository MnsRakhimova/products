import { styled } from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

const FilterBar = styled.div`
  display: flex;
  gap: 3px;
  width: 100vw;
  height: 23px;
  background-color: #d9d9d9;
  padding-left: 23px;
  position: fixed;
  left: 51px;
`;

const Filtering = styled.div`
  cursor: pointer;
  width: 23px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #69b7ff;
  margin-top: 4px;
  font-family: "Rubik", sans-serif;
  font-size: 10px;
  font-weight: 700;
`;

const InputWrapper = styled.div`
  position: relative;
  height: 23px;
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
  width: 168px;
`;

const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  left: 17.98px;
  color: #898989;
`;

export { FilterBar, Filtering, Input, InputWrapper, SearchIcon };
