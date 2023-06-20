import React from "react";
import LogIn from "./log in";
import HomePage from "../src/components/HomePage";
import { useRoutes } from "react-router-dom";
import ProductPage from "./components/Products";

export default function App() {
  let element = useRoutes([
    { path: "/", element: <LogIn /> },
    { path: "/Entry", element: <HomePage /> },
    { path: "/products", element: <ProductPage /> },
  ]);

  return element;
}
