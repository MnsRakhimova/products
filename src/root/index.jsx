import React from "react";
import HomePage from "../HomePage";
import LogIn from "../log in";

import { Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route path="/Entry" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Root;
