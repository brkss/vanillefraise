import React from "react";
import { Home } from "./pages";
import { TopBar, Footer } from "./components";

export const Application: React.FC = () => {
  return (
    <>
      <TopBar />
      <Home />
      <Footer />
    </>
  );
};
