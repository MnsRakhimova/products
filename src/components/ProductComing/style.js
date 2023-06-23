import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 0 20px;
  min-width: 616px;
  height: 32px;
  background-color: #d9d9d9;
`;

const ProductImage = styled.img`
  max-width: 25px;

  min-width: 19px;
`;

const ProductName = styled.h1`
  font-weight: 800;
  font-size: 14px;
  line-height: 130%;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  font-size: 12px;
`;

const Price = styled.h1`
  font-weight: 800;
  font-size: 10px;
  line-height: 130%;
`;

const PriceInput = styled.input`
  width: 33.33px;
  height: 16px;
`;

export { Wrapper, ProductImage, ProductName, ProductPrice, Price, PriceInput };
