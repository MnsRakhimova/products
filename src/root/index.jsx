import React from "react";
import HomePage from "../components/HomePage";
import LogIn from "../log in";
import { Product } from "../components/HomePage/style";
import { Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route path="/Entry" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Root;
