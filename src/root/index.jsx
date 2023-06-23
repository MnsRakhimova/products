import React from "react";
import LogIn from "../log in";
import HomePage from "../components/HomePage";
import { useRoutes } from "react-router-dom";
import ProductPage from "../components/Products";

export default function Root() {
  let element = useRoutes([
    { path: "/", element: <LogIn /> },
    { path: "/Entry", element: <HomePage /> },
    { path: "/products", element: <ProductPage /> },
  ]);

  return element;
}
