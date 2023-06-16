import React from "react";
import LogIn from "./log in";
import HomePage from "./HomePage";
import { useRoutes } from "react-router-dom";

export default function App() {
  let element = useRoutes([
    { path: "/", element: <LogIn /> },
    { path: "/Entry", element: <HomePage /> },
  ]);

  return element;
}
