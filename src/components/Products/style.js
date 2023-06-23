import { styled } from "styled-components";

const Wrapper = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductsWrapper = styled.div`
  margin-top: 30px;
`;

const NewProduct = styled.div`
  width: 616px;
  height: 24px;
  background-color: #d9d9d9;
`;

const Text = styled.h1`
  color: #000;
  font-size: 17px;
  font-weight: 800;
  line-height: 130%;
`;

const NameOfProduct = styled.div`
  font-size: 12px;
  font-weight: 800;
`;

export { Wrapper, Text, ProductsWrapper, NewProduct, NameOfProduct };
