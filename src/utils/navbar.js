import React, { useId } from "react";
import Menu from "../components/Menu";
import FilteringBar from "../components/FilterBar";

const HomePage = React.lazy(() => import("../components/HomePage"));
const Product = React.lazy(() => import("../components/Products"));

const navbar = () => [
  {
    id: useId,
  },
];
