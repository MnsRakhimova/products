import React from "react";
import { ChangeInput, ChangeText, Wrapper } from "./style";

function ChangePrice() {
  return (
    <Wrapper>
      <ChangeText>Нынешная цена: {} руб. Хотите ли изменить? </ChangeText>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: " center",
          gap: "10px",
        }}
      >
        <ChangeInput defaultValue={110} /> <h1> ₽</h1>
      </div>
    </Wrapper>
  );
}

export default ChangePrice;
