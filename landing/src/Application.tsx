import React from "react";
import { Home } from "./pages";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { routes } from "./utils/config/routes";

export const Application: React.FC = () => {
  /*
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
    );
   */
  return <Home />;
};
