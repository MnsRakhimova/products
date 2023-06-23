import React, { useState } from "react";
import {
  Img,
  Wrapper,
  ProductName,
  LeftIcon,
  RigthIcon,
  ProductWeight,
  ProductWrapper,
  Weight,
} from "./style";
import Apple from "../../assets/image/Redapple.png";

function WeightOfProduct() {
  const [count, setCount] = useState(0);
  return (
    <Wrapper>
      <ProductWrapper>
        <Img src={Apple} alt="" />
        <div>
          <ProductName>{}a</ProductName>
          <ProductName>{}₽</ProductName>
        </div>
      </ProductWrapper>
      <ProductWeight>
        <LeftIcon
          onClick={() =>
            //  setCount(count - 0.01)
            (count) => {
              if (count <= 0.01) return setCount(count - 0.01);
              else return 0;
            }}
        />
        <Weight>{count} </Weight>
        <RigthIcon onClick={() => setCount(count + 0.01)} />
      </ProductWeight>
    </Wrapper>
  );
}

export default WeightOfProduct;
