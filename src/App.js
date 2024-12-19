import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Card from "./Components/Card.js";
import "./index.css";
import Header from "./Components/Header";
import { resList } from "./utils/mockData.js";

const AppLayout = () => {
  const [showRes, setShowRes] = useState(resList);
  const [topRated, setTopRated] = useState(false);

  const handleTopResFilter = () => {
    setTopRated(true);
    const filteredres = resList.filter((res) => res.info.avgRating >= 4.2);
    setShowRes(filteredres);
  };

  const handleAllrestaurants = () => {
    setTopRated(false);
    setShowRes(resList);
  };
  return (
    <div className="app mx-4">
      <Header />
      <h2 className="font-bold text-xl">Top restaurant chains in City </h2>
      <button
        className="p-2 bg-green-500 rounded"
        onClick={handleAllrestaurants}
      >
        All Restaurants
      </button>
      <button className="p-2 bg-grey-500 rounded" onClick={handleTopResFilter}>
        Top Rated Restaurants
      </button>
      <div className="flex flex-row gap-4 flex-wrap sm:mx-[5%]">
        {topRated
          ? showRes.map((restaurent, index) => (
              <Card key={restaurent.info.id} resData={restaurent} />
            ))
          : showRes.map((restaurent, index) => (
              <Card key={restaurent.info.id} resData={restaurent} />
            ))}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
