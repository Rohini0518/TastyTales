import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import BodyCards from "./Components/BodyCards";

const AppLayout = () => {

  return (
    <div className="app mx-4">
      <Header />
     <BodyCards />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
