import React from "react";
import {
  Wrapper,
  ProductImage,
  ProductName,
  ProductPrice,
  Price,
  PriceInput,
} from "./style";
import Apple from "../../assets/image/GreenApple.png";
import Button from "../Generic/Button";

function ProductComing() {
  return (
    <Wrapper>
      <div style={{ display: "flex", gap: "5.9px" }}>
        <ProductName>01</ProductName>
        <ProductImage src={Apple} />
        <ProductName>Яблоко зеленое</ProductName>
      </div>
      <ProductPrice>
        <Price>Стоимость</Price>
        <PriceInput />
        <Price>Цена</Price>
        <PriceInput />
        <Price>Приход</Price>
        <PriceInput />
        <Button type={"thinGreen"}>Сохранить</Button>
      </ProductPrice>
    </Wrapper>
  );
}

export default ProductComing;
