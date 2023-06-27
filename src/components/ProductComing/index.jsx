import React, { useContext } from "react";
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
import { PropertiesContext } from "../../context/proporties";

function ProductComing({ data = {}, gap, onClick }) {
  // const [state] = useContext(PropertiesContext);

  const { name, cost, price, incomeKG } = data;
  return (
    <Wrapper>
      <div style={{ display: "flex", gap: "5.9px" }}>
        <ProductName>01</ProductName>
        <ProductImage src={Apple} />
        <ProductName>{name || "no name"}</ProductName>
      </div>
      <ProductPrice>
        <Price>Стоимость</Price>
        <PriceInput placeholder={price || ""} />
        <Price>Цена</Price>
        <PriceInput placeholder={cost || ""} />
        <Price>Приход</Price>
        <PriceInput placeholder={incomeKG || "0кг"} />
        <Button type={"thinGreen"}>Сохранить</Button>
      </ProductPrice>
    </Wrapper>
  );
}

export default ProductComing;
