import React from "react";
import FilteringBar from "../FilterBar";
// import Menu from "../Menu";
import {
  Wrapper,
  Text,
  ProductsWrapper,
  // NewProduct,
  // NameOfProduct,
} from "./style";
import ProductComing from "../ProductComing";

function ProductPage() {
  // function deleteUsers(id) {
  //   let deleteUser = obj.filter((v) => v.id != id);
  //   obj = deleteUser;
  //   getG();
  // }

  // const productMenu = [
  //   {
  //     id: 1,
  //     image: {},
  //     productName: "Яблоко зеленое",
  //   },
  // ];

  // const filtering = productMenu.map((id, productName) => (
  //   <NameOfProduct key={productMenu.id}>{productName}</NameOfProduct>
  // ));

  return (
    <>
      <FilteringBar />
      {/* <Menu /> */}
      <Wrapper>
        <Text>Приход Товаров</Text>
        <ProductsWrapper>{/* <NewProduct>{}</NewProduct> */}</ProductsWrapper>
        <ProductComing />
      </Wrapper>
    </>
  );
}

export default ProductPage;
