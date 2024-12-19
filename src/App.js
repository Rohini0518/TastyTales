import React from "react";
import { createRoot } from "react-dom/client";
import  Card from "./Components/Card.js";
import "./index.css";
import Header from "./Components/Header"
import { resList } from "./utils/mockData.js";

const AppLayout = () => {
  return (
    <div className="app mx-4">
      <Header />
      <h2 className="font-bold text-xl">Top restaurant chains in City </h2>
      <div className="flex flex-row gap-4 flex-wrap sm:mx-[5%]">
      {resList.map((restaurent,index)=><Card key={restaurent.id} resData={resList[index]}/>)}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
